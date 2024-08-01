import type { Get } from "type-fest";
import objectPath from "object-path";

import {
  CLIENT_TRANSLATIONS,
  DEFAULT_LOCALE,
  TRANSLATIONS,
} from "../constants";

import type {
  ClientTranslation,
  ClientTranslationKey,
  Locale,
  Translation,
  TranslationKey,
} from "../types";

/**
 * Returns all the translations for a given locale.
 * @template L The type of the locale.
 *
 * @param locale - The locale for which to retrieve the translations.
 * @returns The translation strings.
 */
export function getTranslations<L extends Locale>(locale: Locale) {
  const strings = TRANSLATIONS[locale];
  return strings as (typeof TRANSLATIONS)[L];
}

/**
 * Checks if a translation key exists for a given locale.
 * @param key - The translation key to check.
 * @param locale - The locale to check for the translation key.
 * @returns A boolean indicating whether the translation key exists for the given locale.
 */
export function hasTranslation<K extends TranslationKey<L>, L extends Locale>(
  key: K,
  locale: L,
) {
  const strings = TRANSLATIONS[locale];
  return objectPath.has(strings, key);
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
export function useTranslation<
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

/**
 * Retrieves the translation for a given key and locale.
 * @template K The translation key type.
 * @template L The locale type.
 *
 * @param key - The key of the translation to retrieve.
 * @param locale - The locale for which to retrieve the translation. Defaults to the defaultLocale.
 * @returns The translation value for the given key and locale.
 */
export function useClientTranslation<
  K extends ClientTranslationKey<L>,
  L extends Locale = typeof DEFAULT_LOCALE,
>(key: K, locale?: L) {
  const strings = CLIENT_TRANSLATIONS[locale ?? DEFAULT_LOCALE];
  return objectPath.get(strings, key) as ClientTranslation<K, L>;
}
