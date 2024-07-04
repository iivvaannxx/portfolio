/// <reference path="../.astro/icon.d.ts" />
/// <reference types="astro/client" />
/// <reference types="typed-query-selector" />

import type { Locale } from "@modules/i18n";

declare global {
  namespace App {
    // The locals attached during middleware.
    interface Locals {
      locale: Locale;
    }
  }
}
