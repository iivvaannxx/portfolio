/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="typed-query-selector" />

import type { Locale } from "@app/modules/i18n/lib/locales";
import type { Turnstile } from "@app/lib/types/turnstile";

interface CustomEventMap {
  "timeline-progress": CustomEvent<{
    progress: number;
    timeline: {
      name: string;
      itemCount: number;
      animation: CSSAnimation;
      element: HTMLElement;
    };
  }>;
}

declare global {
  namespace App {
    // The locals attached during middleware.
    interface Locals {
      locale: Locale;
    }
  }

  interface Window {
    turnstile: Turnstile;

    addEventListener: <K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void,
    ) => void;

    dispatchEvent: <K extends keyof CustomEventMap>(
      ev: CustomEventMap[K],
    ) => void;
  }
}
