import { atom, onMount } from "nanostores";

import {
  DEFAULT_LOCALE,
  getCurrentLocale,
  type Locale,
} from "@app/modules/i18n";

/** The currently selected language. */
export const currentLang = atom<Locale>(DEFAULT_LOCALE);

onMount(currentLang, () => {
  if (typeof window === "undefined") {
    return;
  }

  // Ensure the correct language is set.
  currentLang.set(getCurrentLocale());
});
