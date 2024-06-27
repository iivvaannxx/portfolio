import { defineConfig, squooshImageService } from "astro/config";

import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

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

  markdown: {
    shikiConfig: {
      theme: "ayu-dark",
      wrap: true,
    },
  },

  integrations: [
    react(),
    svelte(),

    tailwind({
      applyBaseStyles: false,
    }),

    icon({
      // The original `astro-icon` integration only supports one icon source.
      // This project contains a custom patch that allows multiple sources.
      iconSource: [
        {
          path: "source/assets/icons",
          keyword: (file) => `${file.subdir}${file.file}`,
        },
      ],

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

    // sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          disallow: "/",
          sitemap: false,
        },
      ],
    }),
  ],
});
