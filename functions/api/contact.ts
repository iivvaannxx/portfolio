import turnstilePlugin from "@cloudflare/pages-plugin-turnstile";
import { corsHeaders } from "constants";

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
    onError: async (...errs) => {
      console.log("turnstileValidator onError");
      return new Response(JSON.stringify(errs), { status: 400 });
    },
  })(context);
};

/**
 * Sends an email with the contact form data.
 * @param context - The context object given to the function.
 */
const sendEmail: PagesFunction<Env> = async (context) => {
  const formData = await context.request.formData();
  console.log("sendEmail");

  return new Response(
    `Successfully verified! ${JSON.stringify(context.data.turnstile)}`,
  );
};

/** The handler chain for the POST request. */
export const onRequestPost: PagesFunction<Env>[] = [
  turnstileValidator,
  sendEmail,
];
