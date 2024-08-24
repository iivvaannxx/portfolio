import { Resend } from "resend";
import { type TurnstileSuccess } from "@cloudflare/pages-plugin-turnstile";

import type { ContactFormData } from "./utils/schema";
import { corsHeaders } from "@api/middleware/cors";
import { ERRORS } from "@api/utils/constants";

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

/** The handler chain for the POST request. */
export const onRequestPost: PagesFunction<Env> = async ({ data, env }) => {
  const resend = new Resend(env.RESEND_API_KEY);

  // Validations from the previous middleware.
  const contactData = data.contactData as ContactFormData;
  const turnstile = data.turnstile as TurnstileSuccess;

  if (!turnstile.success) {
    return new Response(
      JSON.stringify({
        code: ERRORS.turnstileError,
      }),
      { status: 400 },
    );
  }

  const { error } = await resend.emails.send({
    from: `${contactData.name} <contact@ivanporto.io>`,
    to: "dev.ivanporto@gmail.com",
    subject: `[Contact Form]: ${contactData.subject.trim()}`,
    text: `The sender email is: ${contactData.email.trim()}\n${contactData.message.trim()}`,
  });

  if (error) {
    // Refer to the Resend API: https://resend.com/docs/api-reference/errors
    // Most errors shouldn't happen because everything is set up correctly.
    // We only handle internal errors and rate limits. Assume it's internal first.
    let status = 500;
    let code = ERRORS.internalError;

    // Unlikely to happen, but just in case.
    if (error.name === "rate_limit_exceeded") {
      status = 429;
      code = ERRORS.resendRateLimitExceeded;
    }

    return new Response(
      JSON.stringify({
        code,
        data: { error },
      }),
      { status },
    );
  }

  return new Response("Successfully sent the email!");
};
