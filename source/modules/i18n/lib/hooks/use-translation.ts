import type { Locale } from "../locales";
import { catalan } from "../translations/catalan";
import { english } from "../translations/english";
import { spanish } from "../translations/spanish";

// Map each local to it's respective language.
export const translations = {

  ca: catalan,
  en: english,
  es: spanish,

} as const;

/**
 * Returns a translation function based on the provided locale.
 * @template L The type of the locale.
 * @template K The type of the translation key.
 *
 * @param locale The locale to use for translations.
 * @returns The translation function.
 */
export const useTranslations = <L extends Locale> (locale: L) => {
  const strings = translations[locale];
  return strings;
};
