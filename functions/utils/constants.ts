/** The CORS-related headers. */
export const corsHeaders = {
  // Only allow requests from my website.
  "Access-Control-Allow-Origin": "https://ivanporto.io",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

/** Codes to identify the errors. */
export const contactErrors = {
  rateLimitExceeded: "rate_limit_exceeded",
  internalError: "internal_error",
  turnstileError: "turnstile_error",
  schemaError: "schema_error",
};
