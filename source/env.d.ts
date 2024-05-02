/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="typed-query-selector" />

import type { Locale } from "@app/modules/i18n/lib/locales";
import type { Turnstile } from "@app/types/turnstile";

declare global {

  namespace App {

    // The locals attached during middleware.
    interface Locals {
      locale: Locale;
    }
  }

  interface Window {
    turnstile: Turnstile;
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
