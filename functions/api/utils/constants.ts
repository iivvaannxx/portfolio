/** Codes to identify the errors. */
export const ERRORS = {
  /** Error returned when we exceed the Rate Limit of the Resend API. */
  resendRateLimitExceeded: "resend_rate_limit_exceeded",

  /** Error returned when an internal (unknown) error occurs. */
  internalError: "internal_error",

  /** Error returned when the Turnstile token validation fails. */
  turnstileError: "turnstile_error",

  /** Error returned when the Turnstile token is invalid. */
  invalidTurnstileToken: "invalid_turnstile_token",

  /** Error returned when we the schema of some received data doesn't match the expected shape. */
  schemaError: "schema_error",

  /** Error returned when we block a request due to a Rate Limit of our own. */
  rateLimitExceeded: "rate_limit_exceeded",

  /** Error returned when we fail to determine the IP of the request. */
  failedToDetermineIP: "failed_to_determine_ip",
};
