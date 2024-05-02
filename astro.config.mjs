import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ivanporto.io",

  srcDir: "source",
  outDir: "build",
  output: "static",

  compressHTML: true,
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),

    icon({
      iconDir: "source/assets/icons",
    }),

    sitemap(),
    robotsTxt(),
  ],

  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
});
