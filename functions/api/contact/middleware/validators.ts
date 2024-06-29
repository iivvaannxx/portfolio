import turnstilePlugin from "@cloudflare/pages-plugin-turnstile";
import { safeParse } from "valibot";

import { ERRORS } from "@api/utils/constants";
import { ContactFormSchema } from "../utils/schema";

/**
 * Validates the turnstile captcha.
 * @param context - The context object given to the function.
 */
export const turnstileValidator: PagesFunction<Env> = async (context) => {
  return turnstilePlugin({
    secret: context.env.TURNSTILE_SECRET_KEY,
    onError: async (error) => {
      const errorCodes = error.data.turnstile["error-codes"];
      return new Response(
        JSON.stringify({
          code: ERRORS.turnstileError,
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
export const schemaValidator: PagesFunction<Env> = async ({
  next,
  request,
  data,
}) => {
  const formData = await request.formData();
  const contactData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  // Shouldn't happen because the captcha is validated before.
  // This means the requests must come from my website, which should send everything correctly.
  // But just in case, we validate the schema.
  const validation = safeParse(ContactFormSchema, contactData);

  if (!validation.success) {
    return new Response(
      JSON.stringify({
        code: ERRORS.schemaError,
      }),
      { status: 400 },
    );
  }

  data.contactData = contactData;
  return await next();
};
