import { ERRORS } from "@api/utils/constants";

/**
 * Creates a rate limiter middleware handler that limits the number
 * of requests for a connecting IP using the given amount of seconds.
 *
 * @param rateLimitInSeconds The rate limit in seconds.
 * @returns The middleware function.
 */
export const rateLimiter = (rateLimitInSeconds: number) => {
  const handler: PagesFunction<Env> = async ({ request, env, next }) => {
    const clientIP =
      request.headers.get("CF-Connecting-IP") ??
      request.headers.get("x-forwarded-for") ??
      request.headers.get("remote-addr");

    if (!clientIP) {
      return new Response(
        JSON.stringify({
          code: ERRORS.failedToDetermineIP,
        }),
        { status: 500 },
      );
    }

    // It's not rate limited if there's no record of a timestamp.
    // Keys are automitcally deleted after the rate limit period.
    // So we are good only checking if it's not there.
    const lastSentTimestamp = await env.RATE_LIMIT.get(clientIP);

    if (lastSentTimestamp === null) {
      // Proceed to the next handler.
      const result = await next();

      if (result.ok) {
        // Register the current IP.
        const now = Date.now().toString();
        await env.RATE_LIMIT.put(clientIP, now, {
          expirationTtl: rateLimitInSeconds,
        });
      }

      return result;
    }

    // Calculate the time difference in seconds.
    const lastSent = Number(lastSentTimestamp);
    const timeDifference = (Date.now() - lastSent) / 1000;

    return new Response(
      JSON.stringify({
        code: ERRORS.rateLimitExceeded,
        data: {
          retryAfter: Math.ceil(rateLimitInSeconds - timeDifference),
        },
      }),
      { status: 429 },
    );
  };

  return handler;
};
