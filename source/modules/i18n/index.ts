export { default as Paragraph } from "./components/paragraph.astro";
export { default as RealTime } from "./components/real-time.svelte";
export { default as TimeDiff } from "./components/time-diff.svelte";
export { default as LanguageSelector } from "./components/language-selector.svelte";

export { DEFAULT_LOCALE, MY_TIMEZONE } from "./lib/constants";
export {
  getTranslations,
  getTranslation,
  getTranslationHandler,
  useClientTranslation,
} from "./lib/utils/translations";

export {
  isValidLocale,
  getCurrentLocale,
  getLocalizedStaticPaths,
} from "./lib/utils/locales";

export {
  type Locale,
  type TranslationHandler,
  type TranslationKey,
  type Translation,
  type ClientTranslationKey,
  type ClientTranslation,
} from "./lib/types";
