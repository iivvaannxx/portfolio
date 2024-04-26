import objectPath from "object-path";
import type { Get, Paths } from "type-fest";

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

/** Represents a path to a translation key. */
type TranslationKey<L extends Locale> = Paths<typeof translations[L]>;

/** Represents a translation string value. */
type TranslationValue<L extends Locale, T extends TranslationKey<Locale>> = Get<typeof translations[L], T>;

/**
 * Returns a translation function based on the provided locale.
 * @template L The type of the locale.
 * @template K The type of the translation key.
 *
 * @param locale The locale to use for translations.
 * @returns The translation function.
 */
export const useTranslations = <L extends Locale, K extends TranslationKey<L>> (locale: L) => {
  const strings = translations[locale];
  return (key: K) => {
    return objectPath.get(strings, key) as TranslationValue<L, K>;
  };
};
