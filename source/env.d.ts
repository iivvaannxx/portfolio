/// <reference types="astro/client" />
/// <reference types="typed-query-selector" />

import type { Locale } from "@app/modules/i18n/lib/locales";

declare global {

  namespace App {

    // The locals attached during middleware.
    interface Locals {
      locale: Locale;
    }
  }
}

interface Document {
  startViewTransition: (updateCallback: () => Promise<void> | void) => ViewTransition;
}

interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
  skipTransition: () => void;
}

interface CSSStyleDeclaration {
  viewTransitionName: string;
}
