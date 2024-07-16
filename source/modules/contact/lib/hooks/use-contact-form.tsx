import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import type { TurnstileInstance } from "@marsidev/react-turnstile";

import { ContactFormSchema, type ContactFormData } from "../schema";
import { useClientTranslation, type Locale } from "@modules/i18n";
import { useToast } from "@components/ui/react";

/** Defines the different states of the turnstile captcha. */
export type TurnstileStatus = "unknown" | "solved" | "error";

/** Defines the status of the contact form request. */
export type ContactRequestResult = {
  code: string;
  success: boolean;

  title: string;
  message: string;
};

/** The parameters for the useContactForm hook. */
export type UseContactFormParams = {
  locale: Locale;
  onAfterSubmit?: (status: ContactRequestResult) => void;
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
  const t = useClientTranslation("contact", locale);
  const tForm = t.form;

  if (!response.ok) {
    let message: string;
    const { code, data } = (await response.json()) as {
      code: keyof typeof tForm.errors;
      data: Record<string, any>;
    };

    if (code === "rate-limit-exceeded") {
      const formatter = new Intl.RelativeTimeFormat(locale, {
        style: "long",
      });

      message = tForm.errors["rate-limit-exceeded"](
        formatter.format(
          data.retryAfter < 3600
            ? Math.ceil(data.retryAfter / 60)
            : Math.ceil(data.retryAfter / 3600),
          data.retryAfter < 3600 ? "minutes" : "hours",
        ),
      );
    } else {
      message = tForm.errors[code] ?? tForm.errors.unknown;
    }

    if (
      [
        "internal-error",
        "failed-to-determine-ip",
        "turnstile-error",
        "schema-error",
        "unknown",
      ].includes(code)
    ) {
      message += ` ${t.persistingError}`;
    }

    return {
      code,
      message,

      title: t.contactError,
      success: false,
    };
  }

  return {
    code: "success",
    title: t.contactSuccess,
    message: tForm.success,
    success: true,
  };
}

/**
 * Custom hook for coordinating the contact form.
 *
 * @param options The options for the contact form.
 * @param options.locale The locale used in the contact form.
 *
 * @returns All the handlers and state for the contact form.
 */
export function useContactForm({
  locale,
  onAfterSubmit,
}: UseContactFormParams) {
  const { toast } = useToast();

  const t = useClientTranslation("contact", locale);
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

  const [requestResult, setRequestResult] =
    useState<ContactRequestResult | null>(null);

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
    setRequestResult(null);
  };

  /* Submit the form data. */
  const submitForm = form.handleSubmit(async (values) => {
    setTurnstileToken("");
    setTurnstileStatus("unknown");
    turnstileRef.current?.reset();

    const response = await sendForm(values, turnstileToken);
    const result = await handleContactAPIResponse(response, locale);

    toast({
      // Display the success or error message.
      title: result.title,
      description: result.message,
      variant: result.success ? "success" : "destructive",
    });

    setRequestResult(result);
    onAfterSubmit?.(result);
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
    requestResult,
    turnstileRef,
    turnstileToken,
    turnstileStatus,
    resetForm,
    submitForm,
    onTurnstileError,
    onTurnstileSuccess,
  };
}
