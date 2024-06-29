/** Codes to identify the errors. */
export const ERRORS = {
  /** Error returned when we exceed the Rate Limit of the Resend API. */
  resendRateLimitExceeded: "resend-rate-limit-exceeded",

  /** Error returned when an internal (unknown) error occurs. */
  internalError: "internal-error",

  /** Error returned when the Turnstile token validation fails. */
  turnstileError: "turnstile-error",

  /** Error returned when we the schema of some received data doesn't match the expected shape. */
  schemaError: "schema-error",

  /** Error returned when we block a request due to a Rate Limit of our own. */
  rateLimitExceeded: "rate-limit-exceeded",

  /** Error returned when we fail to determine the IP of the request. */
  failedToDetermineIP: "failed-to-determine-ip",
};
