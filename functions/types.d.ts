// Define the types for the environment variables.
interface Env {
  /** The sending mail address. */
  MAIL: string;

  /** The key for the Resend API.  */
  RESEND_API_KEY: string;

  /** The secret key for the Turnstile Captcha Validation. */
  TURNSTILE_SECRET_KEY: string;

  /** The domain of my personal site where this function is invoked. */
  DOMAIN: string;
}

// The parameters of the contact form.
interface MailParams {
  /** The name of the sender. */
  name: string;

  /** The subject of the mail. */
  subject: string;

  /** The message of the mail. */
  message: string;
}

/** The data that should come with a request. */
interface RequestData extends Record<string, string> {
  /** The name of the sender. */
  name?: string;

  /** The subject of the mail. */
  subject?: string;

  /** The email of the sender. */
  email?: string;

  /** The message of the mail. */
  message?: string;

  /** The Cloudflare captcha verification token. */
  cfToken: string;
}
