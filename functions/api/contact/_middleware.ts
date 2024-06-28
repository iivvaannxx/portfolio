import { addCorsHeaders } from "@api/middleware/cors";
import { rateLimiter } from "@api/middleware/rate-limiter";
import { handleUncaughtErrors } from "@api/middleware/uncaught-errors";

import { schemaValidator, turnstileValidator } from "./middleware/validators";

/** The rate limit applied to our contact form (1 every 3 hours). */
const CONTACT_FORM_RATE_LIMIT = 60 * 60 * 3;

/** The middleware chain applied to /api/contact POST requests. */
export const onRequestPost: PagesFunction<Env>[] = [
  handleUncaughtErrors,
  addCorsHeaders,
  rateLimiter(CONTACT_FORM_RATE_LIMIT),
  turnstileValidator,
  schemaValidator,
];
