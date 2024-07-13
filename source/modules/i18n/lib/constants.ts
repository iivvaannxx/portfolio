import { clientEnglish, english } from "../translations/english";
import { clientSpanish, spanish } from "../translations/spanish";
import { clientCatalan, catalan } from "../translations/catalan";

import type { Locale, Timezone } from "./types";

/** My own timezone. */
export const MY_TIMEZONE = "Europe/Madrid" satisfies Timezone;

/** The locales available in the website. */
export const SUPPORTED_LOCALES = ["en", "es", "ca"] as const;

/** The localized routes in the website. */
export const LOCALIZED_ROUTES = ["archive"] as const;

/** The default locale of the website. */
export const DEFAULT_LOCALE = "en" as const satisfies Locale;

/** The default translations strings of the website.  */
export const DEFAULT_TRANSLATION = english satisfies {
  meta: { locale: typeof DEFAULT_LOCALE };
};

/** The map with all our translated strings. */
export const TRANSLATIONS = {
  en: english,

  // TODO: Finish translations.
  ca: catalan,
  es: spanish,
} as const;

export const CLIENT_TRANSLATIONS = {
  en: clientEnglish,

  // TODO: Finish translations.
  ca: clientEnglish,
  es: clientEnglish,
};

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
