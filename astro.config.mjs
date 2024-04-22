import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import qwikdev from "@qwikdev/astro";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://ivanporto.io",
  srcDir: "source",
  outDir: "build",
  output: "static",

  integrations: [
    tailwind({ applyBaseStyles: false }),
    qwikdev(),
    sitemap(),
    robotsTxt(),
    playformCompress(),
  ],
});
