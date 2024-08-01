import {
  DEFAULT_LOCALE,
  LOCALIZED_ROUTES,
  SUPPORTED_LOCALES,
} from "../constants";

import { useTranslation } from "./translations";
import type { Locale, LocalizedRoute } from "../types";

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
 * Checks if a given route is a localized route.
 *
 * @param route - The route to check.
 * @returns True if the route is a localized route, false otherwise.
 */
export function isLocalizedRoute(route: string): route is LocalizedRoute {
  return LOCALIZED_ROUTES.includes(route as LocalizedRoute);
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
  const cleanRoute = route.startsWith("/") ? route.slice(1) : route;
  let routeName = isLocalizedRoute(cleanRoute)
    ? useTranslation(`meta.routes.${cleanRoute}`, locale)
    : route;

  // Ensure we don't have a leading slash.
  routeName = routeName.startsWith("/") ? routeName.slice(1) : routeName;
  return locale === DEFAULT_LOCALE
    ? `/${routeName}`
    : `/${locale}/${routeName}`;
}

/**
 * Returns the localized static paths used by Astro to generate pages.
 * @returns An array of static path definitions.
 */
export function createStaticPathsHandler(localizedRoute?: LocalizedRoute) {
  return () => {
    // See: https://docs.astro.build/en/reference/api-reference/#getstaticpaths
    return SUPPORTED_LOCALES.map((locale) => {
      // By setting the `locale` param to `undefined` (if it's the default locale)
      // We ensure that it will be available at `/` instead of `/{locale}`.
      const pathname = locale === DEFAULT_LOCALE ? undefined : locale;
      const optionalParams = {} as Record<string, string>;

      if (localizedRoute) {
        const route = useTranslation(`meta.routes.${localizedRoute}`, locale);
        optionalParams[localizedRoute] = route;
      }

      return {
        params: { locale: pathname, ...optionalParams },
        props: { locale },
      };
    });
  };
}
