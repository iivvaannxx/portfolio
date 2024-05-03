import { defineMiddleware } from "astro:middleware";
import { defaultLocale, isValidLocale } from "./modules/i18n/lib/locales";

/**
 * Middleware that handles the localization of a page.
 * If the locale is not valid, it redirects to the 404 page.
 *
 * The purpose of this middleware is to make the locale
 * globally available in the `Astro.locals` object.
 *
 * @param params - The parameters of the request.
 * @param locals - The locals object of the request.
 * @param redirect - The redirect function.
 * @param next - The next function.
 */
const localize = defineMiddleware(
  async ({ params, locals, redirect }, next) => {
    // Assign the locale or the default if it's not defined (or wrong).
    const { locale = defaultLocale } = params;

    // If the locale is not valid, redirect to the 404 page.
    if (!isValidLocale(locale)) {
      return redirect("/404");
    }

    locals.locale = locale;
    return await next();
  },
);

export const onRequest = localize;
