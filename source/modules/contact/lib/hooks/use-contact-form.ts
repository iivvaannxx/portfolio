import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import type { TurnstileInstance } from "@marsidev/react-turnstile";

import { ContactFormSchema, type ContactFormData } from "../schema";
import { getCurrentLocale } from "@app/modules/i18n";

/** Defines the different states of the turnstile captcha. */
export type TurnstileStatus = "unknown" | "solved" | "error";

/** Defines the status of the contact form request. */
export type ContactRequestStatus = {
  success: boolean;
  message: string;
};

/** The endpoint for the contact form. */
const CONTACT_ENDPOINT = "/api/contact";

/**
 * Sends the contact form data to the server.
 *
 * @param values - The values of the contact form.
 * @param turnstileToken - The turnstile token for authentication.
 * @returns A Promise that resolves to the server response.
 */
async function sendForm(values: ContactFormData, turnstileToken: string) {
  const formData = new FormData();
  formData.append("name", values.name);
  formData.append("email", values.email);
  formData.append("subject", values.subject);
  formData.append("message", values.message);
  formData.append("cf-turnstile-response", turnstileToken);

  const response = await fetch(CONTACT_ENDPOINT, {
    method: "POST",
    body: formData,
  });

  return await handleContactAPIResponse(response);
}

/**
 * Handles the API response for the contact form submission.
 *
 * @param response The response object from the API.
 * @returns An object indicating the success status and the corresponding message.
 */
async function handleContactAPIResponse(response: Response) {
  if (!response.ok) {
    const { code, data } = (await response.json()) as {
      code: string;
      data: Record<string, any>;
    };

    const formatter = new Intl.RelativeTimeFormat(getCurrentLocale(), {
      style: "long",
    });

    const errorMessages: Record<string, string> = {
      "resend-rate-limit-exceeded":
        "Rate limit exceeded. Please try again later.",
      "internal-error": "An internal error occurred. Please try again later.",
      "turnstile-error":
        "An error occurred validating the Turnstile captcha. Please try again.",
      "invalid-turnstile-token":
        "The Turnstile token is invalid. Please try resetting the form and submitting again.",
      "schema-error":
        "The form data is invalid. Please check the fields and try again.",

      // Only 1 email every 3 hours.
      "rate-limit-exceeded": `Rate limit exceeded. Please try again ${formatter.format(
        data.retryAfter < 3600
          ? Math.ceil(data.retryAfter / 60)
          : Math.ceil(data.retryAfter / 3600),
        data.retryAfter < 3600 ? "minutes" : "hours",
      )}.`,

      "failed-to-determine-ip": "Failed to determine the IP of the request.",
    };

    return {
      success: false,
      message: errorMessages[code] ?? "An unknown error occurred.",
    };
  }

  return {
    success: true,
    message: "The email was sent successfully!",
  };
}

export function useContactForm() {
  const form = useForm<ContactFormData>({
    resolver: valibotResolver(ContactFormSchema),
    mode: "onTouched",

    defaultValues: {
      email: "dev.ivanporto@gmail.com",
      name: "Ivan Porto",
      subject: "Hey there!",
      message: "How is everything? Does this work?",
    },
  });

  const [requestStatus, setRequestStatus] =
    useState<ContactRequestStatus | null>(null);

  const turnstileRef = useRef<TurnstileInstance>();
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileStatus, setTurnstileStatus] =
    useState<TurnstileStatus>("unknown");

  /* Reset the form state. */
  const resetForm = () => {
    form.reset();
    turnstileRef.current?.reset();

    setTurnstileToken("");
    setTurnstileStatus("unknown");
  };

  /* Submit the form data. */
  const submitForm = form.handleSubmit(async (values) => {
    const result = await sendForm(values, turnstileToken);
    setRequestStatus(result);
  });

  /* Error callback if the Turnstile Captcha fails. */
  const onTurnstileError = () => {
    setTurnstileStatus("error");
  };

  /** Success callback if the Turnstile Captcha is solved. */
  const onTurnstileSuccess = (token: string) => {
    setTurnstileToken(token);
    setTurnstileStatus("solved");
  };

  return {
    form,
    requestStatus,
    turnstileRef,
    turnstileToken,
    turnstileStatus,
    resetForm,
    submitForm,
    onTurnstileError,
    onTurnstileSuccess,
  };
}
