/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="typed-query-selector" />

import type { Locale } from "@app/modules/i18n/lib/locales";
import type { Turnstile } from "@app/lib/types/turnstile";
import type { Skill } from "@app/lib/data/skills";

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

  declare module "~icons/*" {
    const component: (
      props: astroHTML.JSX.SVGAttributes,
    ) => astroHTML.JSX.Element;
    export default component;
  }
}
