export { default as MyTime } from "./components/my-time.svelte";
export { default as Paragraph } from "./components/paragraph.astro";

export { DEFAULT_LOCALE, type Locale } from "./lib/constants";
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
