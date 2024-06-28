import { ERRORS } from "@api/utils/constants";

/**
 * Handles uncaught errors in the middleware chain.
 *
 * @param context The context object.
 * @param context.next The next handler in the chain.
 */
export const handleUncaughtErrors: PagesFunction = async ({ next }) => {
  try {
    // Invoke the next middleware function in the chain.
    return await next();
  } catch (error) {
    // Return a 500 error if something goes wrong.
    return new Response(
      JSON.stringify({
        code: ERRORS.internalError,
        data: {
          error,
        },
      }),
      { status: 500 },
    );
  }
};
