// Define the types for the environment variables.
interface Env {
  /** The key for the Resend API.  */
  RESEND_API_KEY: string;

  /** The secret key for the Turnstile Captcha Validation. */
  TURNSTILE_SECRET_KEY: string;

  /** The bound KV Namespace to handle rate limits. */
  RATE_LIMIT: KVNamespace;
}
