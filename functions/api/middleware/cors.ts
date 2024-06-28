/** The CORS-related headers. */
export const corsHeaders = {
  // Only allow requests from my website.
  "Access-Control-Allow-Origin": "https://ivanporto.io",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

/**
 * Adds all the cors headers to the response.
 *
 * @param next - The next middleware function in the chain.
 * @returns The response from the next handler with the CORS headers set.
 */
export const addCorsHeaders: PagesFunction = async ({ next }) => {
  const response = await next();

  for (const [header, value] of Object.entries(corsHeaders)) {
    response.headers.set(header, value);
  }

  return response;
};
