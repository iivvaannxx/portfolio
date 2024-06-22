import type { Get, Paths } from "type-fest";
import objectPath from "object-path";

import { DEFAULT_LOCALE, type Locale, TRANSLATIONS } from "../constants";

/**
 * Defines the signature of a function which, given a locale, returns the localized string of a pre-given key.
 * @template T The type of the translation string.
 *
 * @param locale - The locale to use to retrieve the translation.
 * @returns The translation string.
 */
export type TranslationHandler<
  T extends string | string[] | readonly string[] = string,
> = (locale: Locale) => T;

/**
 * Represents a translation key for a specific locale.
 * @template L The type of the locale.
 */
export type TranslationKey<L extends Locale = Locale> = Paths<
  (typeof TRANSLATIONS)[L]
>;

/**
 * Represents the type of a translation value.
 *
 * @template K - The translation key.
 * @template L - The locale.
 */
export type Translation<
  K extends TranslationKey<L>,
  L extends Locale = Locale,
> = Get<(typeof TRANSLATIONS)[L], K>;

/**
 * Returns a translation function based on the provided locale.
 * @template L The type of the locale.
 *
 * @param locale The locale to use for translations.
 * @returns The translation function.
 */
export function getTranslations<L extends Locale>(locale: L) {
  const strings = TRANSLATIONS[locale];
  return strings;
}

/**
 * Retrieves the translation for a given key and locale.
 * @template K The translation key type.
 * @template L The locale type.
 *
 * @param key - The key of the translation to retrieve.
 * @param locale - The locale for which to retrieve the translation. Defaults to the defaultLocale.
 * @returns The translation value for the given key and locale.
 */
export function getTranslation<
  K extends TranslationKey<L>,
  L extends Locale = typeof DEFAULT_LOCALE,
>(key: K, locale?: L) {
  const strings = TRANSLATIONS[locale ?? DEFAULT_LOCALE];
  return objectPath.get(strings, key) as Translation<K, L>;
}

/**
 * Returns a translation handler function that retrieves a translation string based on the provided key and locale.
 * @template K The translation key type.
 *
 * @param key - The key of the translation string to retrieve.
 * @returns A translation handler function that takes a locale as an argument and returns the translation string.
 */
export function getTranslationHandler<K extends TranslationKey>(key: K) {
  return <L extends Locale>(locale: L) => {
    // I would simply call "getTranslation" instead of duplicating the code.
    // But for some reason it breaks type safety.
    const strings = TRANSLATIONS[locale];
    return objectPath.get(strings, key) as Get<(typeof TRANSLATIONS)[L], K>;
  };
}
