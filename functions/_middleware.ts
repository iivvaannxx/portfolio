import { corsHeaders } from "constants";

/**
 * Handles uncaught errors in the middleware chain.
 *
 * @param context The context object.
 * @param context.next The next handler in the chain.
 */
const handleUncaughtErrors: PagesFunction = async ({ next }) => {
  try {
    // Invoke the next middleware function in the chain.
    console.log("handleErrors");
    return await next();
  } catch (error) {
    // Return a 500 error if something goes wrong.
    console.error(error);
    return new Response(
      "An unexpected error happened. Is the request well-formed?",
      { status: 500 },
    );
  }
};

/**
 * Adds all the cors headers to the response.
 *
 * @param next - The next middleware function in the chain.
 * @returns The response from the next handler with the CORS headers set.
 */
const addCors: PagesFunction = async ({ next }) => {
  const response = await next();
  console.log("addCors");

  for (const [header, value] of Object.entries(corsHeaders)) {
    response.headers.set(header, value);
  }

  return response;
};

// Chain here all the middlewares.
export const onRequest = [handleUncaughtErrors, addCors];
