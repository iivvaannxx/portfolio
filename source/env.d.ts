/// <reference path="../.astro/icon.d.ts" />
/// <reference types="astro/client" />
/// <reference types="typed-query-selector" />

import "astro";
import type { Locale, TRANSLATIONS } from "@modules/i18n";

declare module "astro" {
  interface AstroClientDirectives {
    "client:event"?: string;
  }
}

declare global {
  namespace App {
    // The locals attached during middleware.
    interface Locals {
      locale: Locale;
      translations: (typeof TRANSLATIONS)[Locale];
    }
  }

  interface Window {
    lenisScrollTo: (target: string, event?: Event) => void;
  }
}
