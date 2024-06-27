import turnstilePlugin from "@cloudflare/pages-plugin-turnstile";
import { Resend } from "resend";
import { safeParse } from "valibot";

import { corsHeaders } from "utils/constants";
import { ContactFormSchema } from "@app/modules/contact/lib/schema";
import { handleResendError } from "utils/errors";

/**
 * Sets the CORS headers for the preflight request.
 *
 * @param _context - The context object containing information about the request.
 * @returns A Response object with a 204 status code and the CORS headers.
 */
export const onRequestOptions: PagesFunction = async (_context) => {
  // Implement CORS.
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
};

/**
 * Validates the turnstile captcha.
 * @param context - The context object given to the function.
 */
const turnstileValidator: PagesFunction<Env> = async (context) => {
  return turnstilePlugin({
    secret: context.env.TURNSTILE_SECRET_KEY,
    onError: async (error) => {
      const errorCodes = error.data.turnstile["error-codes"];
      return new Response(
        JSON.stringify({
          message: "Error while validating the Turnstile Token",
          data: { errorCodes },
        }),
        { status: 400 },
      );
    },
  })(context);
};

/**
 * Sends an email with the contact form data.
 * @param context - The context object given to the function.
 */
const sendEmail: PagesFunction<Env> = async (context) => {
  const resend = new Resend(context.env.RESEND_API_KEY);
  const formData = await context.request.formData();

  const contactData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };
  const validation = safeParse(ContactFormSchema, contactData);

  if (!validation.success) {
    return new Response(
      JSON.stringify({
        message: "Invalid form data.",
        data: {
          issues: validation.issues,
          output: validation.output,
        },
      }),
      { status: 400 },
    );
  }

  const { data, error } = await resend.emails.send({
    from: `${contactData.name} <contact@ivanporto.io>`,
    to: "dev.ivanporto@gmail.com",

    subject: `[Contact Form]: ${contactData.subject.trim()}`,
    text: `
      The sender email is: ${contactData.email}\n
      ${contactData.message}
    `,
  });

  if (error) {
    const response = handleResendError(error);

    if (response) {
      return response;
    }
  }

  return new Response(
    `Successfully verified! ${JSON.stringify({
      data,
      error,
      test: safeParse(ContactFormSchema, {}),
    })}`,
  );
};

/** The handler chain for the POST request. */
export const onRequestPost: PagesFunction<Env>[] = [
  // Disable the turnstile validator until final deploy.
  // It does not work in the local environment.
  // turnstileValidator,
  sendEmail,
];
