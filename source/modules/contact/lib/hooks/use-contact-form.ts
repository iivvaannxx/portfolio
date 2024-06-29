import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import type { TurnstileInstance } from "@marsidev/react-turnstile";

import { ContactFormSchema, type ContactFormData } from "../schema";
import { useClientTranslation, type Locale } from "@app/modules/i18n";

/** Defines the different states of the turnstile captcha. */
export type TurnstileStatus = "unknown" | "solved" | "error";

/** Defines the status of the contact form request. */
export type ContactRequestStatus = {
  code: string;
  success: boolean;
  message: string;
};

/** The parameters for the useContactForm hook. */
export type UseContactFormParams = {
  locale: Locale;
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

  return response;
}

/**
 * Handles the API response for the contact form submission.
 *
 * @param response The response object from the API.
 * @returns An object indicating the success status and the corresponding message.
 */
async function handleContactAPIResponse(response: Response, locale: Locale) {
  const t = useClientTranslation("contact.form", locale);

  if (!response.ok) {
    const { code, data } = (await response.json()) as {
      code: keyof typeof t.errors;
      data: Record<string, any>;
    };

    if (code === "rate-limit-exceeded" && data.retryAfter) {
      const formatter = new Intl.RelativeTimeFormat(locale, {
        style: "long",
      });

      t.errors["rate-limit-exceeded"].replace(
        "%s",
        formatter.format(
          data.retryAfter < 3600
            ? Math.ceil(data.retryAfter / 60)
            : Math.ceil(data.retryAfter / 3600),
          data.retryAfter < 3600 ? "minutes" : "hours",
        ),
      );
    }

    return {
      code,
      success: false,

      message: t.errors[code] ?? t.errors.unknown,
    };
  }

  return {
    code: "success",
    success: true,
    message: t.success,
  };
}

export function useContactForm({ locale }: UseContactFormParams) {
  const form = useForm<ContactFormData>({
    resolver: valibotResolver(ContactFormSchema),
    mode: "onTouched",

    defaultValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
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
    setRequestStatus(null);
  };

  /* Submit the form data. */
  const submitForm = form.handleSubmit(async (values) => {
    const response = await sendForm(values, turnstileToken);
    const result = await handleContactAPIResponse(response, locale);

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
