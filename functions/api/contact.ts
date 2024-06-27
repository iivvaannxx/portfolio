import turnstilePlugin, {
  type TurnstileSuccess,
} from "@cloudflare/pages-plugin-turnstile";

import { Resend } from "resend";
import { safeParse } from "valibot";

import { corsHeaders, contactErrors } from "utils/constants";
import { ContactFormSchema, type ContactForm } from "@app/modules/contact";

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
          code: contactErrors.turnstileError,
          data: { errorCodes },
        }),
        { status: 400 },
      );
    },
  })(context);
};

/**
 * Validates the form data against the ContactFormSchema and stores the validated data in the `data` object.
 * If the form data is invalid, it returns a response with an error message.
 *
 * @param context - The context object given to the function.
 * @param context.request - The incoming request object.
 * @param context.data - The data object that will be passed to the next function in the chain.
 * @param context.next - The next function in the chain.
 */
const schemaValidator: PagesFunction<Env> = async ({ next, request, data }) => {
  const formData = await request.formData();
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
        message: "Invalid form data. Check the schema for the correct fields.",
        code: contactErrors.schemaError,
      }),
      { status: 400 },
    );
  }

  data.contactData = contactData;
  return await next();
};

/**
 * Sends an email with the contact form data.
 * @param context - The context object given to the function.
 */
const sendEmail: PagesFunction<Env> = async ({ data, env }) => {
  const resend = new Resend(env.RESEND_API_KEY);

  // Validations from the previous middleware.
  const contactData = data.contactData as ContactForm;
  const turnstile = data.turnstile as TurnstileSuccess;

  if (!turnstile.success) {
    return new Response(
      JSON.stringify({
        message:
          "The Turnstile token is invalid. Please try resetting the form and submitting again.",
        code: contactErrors.turnstileError,
      }),
      { status: 400 },
    );
  }

  const { error } = await resend.emails.send({
    from: `${contactData.name} <contact@ivanporto.io>`,
    to: "dev.ivanporto@gmail.com",

    subject: `[Contact Form]: ${contactData.subject.trim()}`,
    text: `
      The sender email is: ${contactData.email}\n
      ${contactData.message}
    `,
  });

  if (
    error?.name === "application_error" ||
    error?.name === "internal_server_error"
  ) {
    return new Response(
      JSON.stringify({
        message: "An internal error occurred. Please try again later.",
        code: contactErrors.internalError,
      }),
      {
        status: 500,
      },
    );
  }

  if (error?.name === "rate_limit_exceeded") {
    return new Response(
      JSON.stringify({
        message: "Rate limit exceeded. Only 10 mails per second are allowed.",
        code: contactErrors.rateLimitExceeded,
      }),
      { status: 429 },
    );
  }

  return new Response("Successfully sent the email!");
};

/** The handler chain for the POST request. */
export const onRequestPost: PagesFunction<Env>[] = [
  turnstileValidator,
  schemaValidator,
  sendEmail,
];
