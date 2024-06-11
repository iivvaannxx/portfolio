import { deepmerge } from "deepmerge-ts";

import { catalan } from "../translations/catalan";
import { english } from "../translations/english";
import { spanish } from "../translations/spanish";

/** The locales available in the website. */
export const SUPPORTED_LOCALES = ["en", "es", "ca"] as const;

/** Defines a locale code of the website. */
export type Locale = (typeof SUPPORTED_LOCALES)[number];

/** The default locale of the website. */
export const DEFAULT_LOCALE = "en" as const satisfies Locale;

/** The default translations strings of the website.  */
export const DEFAULT_TRANSLATION = english satisfies {
  meta: { locale: typeof DEFAULT_LOCALE };
};

/** The map with all our translated strings. */
export const TRANSLATIONS = {
  en: english,
  ca: deepmerge(DEFAULT_TRANSLATION, catalan),
  es: deepmerge(DEFAULT_TRANSLATION, spanish),
} as const;

/** The formatting options passed to the Intl API. */
export const DEFAULT_INTL_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",

  weekday: "long",
  day: "numeric",
  month: "long",

  timeZone: "Europe/Madrid",
  timeZoneName: "short",
};
