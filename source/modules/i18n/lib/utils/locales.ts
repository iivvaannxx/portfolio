import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "../constants";
import type { Locale } from "../types";

/**
 * Checks if a given locale is valid.
 *
 * @param locale - The locale to check.
 * @returns A boolean indicating whether the locale is valid.
 */
export function isValidLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}

/**
 * Retrieves the current locale from the window location pathname.
 * If no locale is found, the default locale is returned.
 *
 * @param defaultLoc The default locale to use if no locale is found.
 * @returns The current locale or the default locale.
 */
export function getCurrentLocale(defaultLoc = DEFAULT_LOCALE) {
  // We discard the initial slash.
  const [, slug] = window.location.pathname.split("/");
  const locale = slug.substring(0, 2);

  // Ensure it's a supported locale.
  if (isValidLocale(locale)) {
    return locale;
  }

  return defaultLoc;
}

/**
 * Returns the route with the specified locale prefix.
 * If the locale is the default locale, the route is returned as is.
 * Otherwise, the route is prefixed with the locale.
 *
 * @param locale The locale to use for the route.
 * @param route The route to be prefixed with the locale.
 * @returns The route with the locale prefix.
 */
export function getLocaleRoute(locale: Locale, route: string) {
  return locale === DEFAULT_LOCALE ? `/${route}` : `/${locale}/${route}`;
}

/**
 * Returns the localized static paths used by Astro to generate pages.
 * @returns An array of static path definitions.
 */
export function getLocalizedStaticPaths() {
  // See: https://docs.astro.build/en/reference/api-reference/#getstaticpaths
  return SUPPORTED_LOCALES.map((locale) => {
    // By setting the `locale` param to `undefined` (if it's the default locale)
    // We ensure that it will be available at `/` instead of `/{locale}`.
    const pathname = locale === DEFAULT_LOCALE ? undefined : locale;
    return {
      params: { locale: pathname },
      props: { locale },
    };
  });
}
