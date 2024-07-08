/// <reference path="../.astro/icon.d.ts" />
/// <reference types="astro/client" />
/// <reference types="typed-query-selector" />

import type { Locale } from "@modules/i18n";
import type Lenis from "lenis";

declare global {
  namespace App {
    // The locals attached during middleware.
    interface Locals {
      locale: Locale;
    }
  }

  interface Window {
    lenisScrollTo: (target: string, event?: Event) => void;
  }
}
