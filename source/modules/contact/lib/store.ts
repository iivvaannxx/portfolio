import { atom, onMount } from "nanostores";

import { DEFAULT_LOCALE } from "@app/modules/i18n/lib/constants";
import { getCurrentLocale } from "@app/modules/i18n/lib/utils/locales";
import type { Locale } from "@app/modules/i18n/lib/types";

/** The currently selected language. */
export const currentLang = atom<Locale>(DEFAULT_LOCALE);

// Ensure the correct language is set before is used.
onMount(currentLang, () => {
  if (typeof window === "undefined") {
    return;
  }

  currentLang.set(getCurrentLocale());
});
