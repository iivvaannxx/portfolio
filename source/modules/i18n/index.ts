export { default as RealTime } from "./components/real-time.svelte";
export { default as LocalTime } from "./components/local-time.svelte";
export { default as TimeDiff } from "./components/time-diff.svelte";

export { default as Paragraph } from "./components/paragraph.astro";

export { DEFAULT_LOCALE, MY_TIMEZONE, type Locale } from "./lib/constants";
export {
  getTranslations,
  getTranslation,
  getTranslationHandler,
  type TranslationHandler,
  type TranslationKey,
  type Translation,
} from "./lib/utils/translations";

export {
  isValidLocale,
  getCurrentLocale,
  getLocalizedStaticPaths,
} from "./lib/utils/locales";
