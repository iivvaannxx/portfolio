import { ERRORS } from "../utils/constants";

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
      // Register the current IP.
      const now = Date.now().toString();
      await env.RATE_LIMIT.put(clientIP, now, {
        expirationTtl: rateLimitInSeconds,
      });

      // Proceed to the next handler.
      return await next();
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
