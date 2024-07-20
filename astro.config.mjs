import { defineConfig, squooshImageService } from "astro/config";

import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

import eventDirective from "./source/lib/utils/directives/event/register";

// https://astro.build/config
export default defineConfig({
  site: "https://ivanporto.io",

  srcDir: "source",
  outDir: "build",
  output: "static",

  compressHTML: true,
  image: {
    service: squooshImageService(),
  },

  devToolbar: {
    enabled: false,
  },

  integrations: [
    eventDirective(),

    react(),
    svelte(),

    tailwind({
      applyBaseStyles: false,
    }),

    icon({
      iconDir: "source/assets/icons",

      // See: https://github.com/natemoo-re/astro-icon/issues/195
      svgoOptions: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupIds: false,
              },
            },
          },
        ],
      },
    }),

    robotsTxt(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          es: "es-ES",
          ca: "ca-ES",
        },
      },
    }),
  ],
});
