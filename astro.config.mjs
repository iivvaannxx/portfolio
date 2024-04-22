import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import qwikdev from "@qwikdev/astro";
import spotlightjs from "@spotlightjs/astro";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import tsConfigPaths from "vite-tsconfig-paths";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://ivanporto.io",
  srcDir: "source",
  outDir: "build",
  integrations: [
    tailwind(),
    qwikdev(),
    sentry(),
    spotlightjs(),
    sitemap(),
    robotsTxt(),
    playformCompress(),
  ],
});
