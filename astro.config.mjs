import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import qwikdev from "@qwikdev/astro";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://ivanporto.io",

  srcDir: "source",
  outDir: "build",
  output: "static",

  compressHTML: true,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),

    qwikdev(),
    icon({
      iconDir: "source/assets/icons",
    }),

    sitemap(),
    robotsTxt(),
  ],

  vite: {
    plugins: [Icons({
      compiler: "astro",
    })],
  },
});
