export { default as MyTime } from "./components/my-time.svelte";

export { getTranslations, getTranslation } from "./lib/translations";
export {
  isValidLocale,
  getCurrentLocale,
  getLocalizedStaticPaths,
} from "./lib/locales";
