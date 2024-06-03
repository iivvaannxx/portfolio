/** The locales available in the website. */
export const supportedLocales = ["en", "es", "ca"] as const;

/** Defines a locale code of the website. */
export type Locale = (typeof supportedLocales)[number];

/** The default locale of the website. */
export const defaultLocale: Locale = "en";

/**
 * Checks if a given locale is valid.
 *
 * @param locale - The locale to check.
 * @returns A boolean indicating whether the locale is valid.
 */
export function isValidLocale(locale: string): locale is Locale {
  return supportedLocales.includes(locale as Locale);
}

/**
 * Retrieves the current locale from the window location pathname.
 * If no locale is found, the default locale is returned.
 *
 * @param defaultLoc The default locale to use if no locale is found.
 * @returns The current locale or the default locale.
 */
export function getCurrentLocale(defaultLoc = defaultLocale) {
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
 * Returns the localized static paths used by Astro to generate pages.
 * @returns An array of static path definitions.
 */
export function getLocalizedStaticPaths() {
  // See: https://docs.astro.build/en/reference/api-reference/#getstaticpaths
  return supportedLocales.map((locale) => {
    // By setting the `locale` param to `undefined` (if it's the default locale)
    // We ensure that it will be available at `/` instead of `/{locale}`.
    const pathname = locale === defaultLocale ? undefined : locale;
    return {
      params: { locale: pathname },
      props: { locale },
    };
  });
}
