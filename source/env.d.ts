/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="unplugin-icons/types/svelte" />
/// <reference types="typed-query-selector" />

import type { Locale } from "@app/modules/i18n/lib/locales";
import type { Turnstile } from "@app/lib/types/turnstile";
import type { Skill } from "@app/lib/data/skills";

import type { ReactThreeFiber } from "@react-three/fiber";

interface CustomEventMap {
  "skill:show": CustomEvent<{
    skillName: Skill;
  }>;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      portalMaterial: ReactThreeFiber.ShaderMaterialProps;
    }
  }

  declare module "*.glsl" {
    const shaderSource: string;
    export default shaderSource;
  }

  namespace App {
    // The locals attached during middleware.
    interface Locals {
      locale: Locale;
    }
  }

  interface Window {
    turnstile: Turnstile;
  }

  interface DocumentEventMap extends CustomEventMap {}
}
