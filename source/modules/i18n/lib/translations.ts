import objectPath from "object-path";
import type { Get, Paths } from "type-fest";

import { type Locale, defaultLocale } from "./locales";
import { catalan } from "./translations/catalan";
import { english } from "./translations/english";
import { spanish } from "./translations/spanish";

// Map each local to it's respective language.
export const translations = {
  ca: catalan,
  en: english,
  es: spanish,
} as const;

/**
 * Returns a translation function based on the provided locale.
 * @template L The type of the locale.
 *
 * @param locale The locale to use for translations.
 * @returns The translation function.
 */
export function getTranslations<L extends Locale>(locale: L) {
  const strings = translations[locale];
  return strings;
}

/**
 * Retrieves the translation for a given key and locale.
 *
 * @param key - The key of the translation to retrieve.
 * @param locale - The locale for which to retrieve the translation. Defaults to the defaultLocale.
 * @returns The translation value for the given key and locale.
 */
export function getTranslation<
  L extends Locale,
  K extends Paths<(typeof translations)[L]>,
>(key: K, locale = defaultLocale) {
  const strings = translations[locale];
  return objectPath.get(strings, key) as Get<(typeof translations)[L], K>;
}
