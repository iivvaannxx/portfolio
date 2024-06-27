import type { ErrorResponse } from "resend";

/**
 * Handles the error response when using the Resend API.
 *
 * @param error - The error response object.
 * @returns A Response object based on the error type.
 */
export function handleResendError(error: ErrorResponse) {
  // According to the docs: https://resend.com/docs/api-reference/errors
  // These are the only possible errors we should face, and thus handle.
  // The other errors should not happen if everything is correctly setup.

  if (
    error.name === "application_error" ||
    error.name === "internal_server_error"
  ) {
    return new Response("An internal error occurred. Please try again later.", {
      status: 500,
    });
  }

  if (error.name === "rate_limit_exceeded") {
    return new Response(
      "Rate limit exceeded. Only 10 mails per second are allowed.",
      { status: 429 },
    );
  }
}
