import { atom, onMount } from "nanostores";
import { DEFAULT_LOCALE, getCurrentLocale, type Locale } from "@modules/i18n";

/** The currently selected language. */
export const currentLang = atom<Locale>(DEFAULT_LOCALE);

// Ensure the correct language is set before is used.
onMount(currentLang, () => {
  if (typeof window === "undefined") {
    return;
  }

  currentLang.set(getCurrentLocale());
});
