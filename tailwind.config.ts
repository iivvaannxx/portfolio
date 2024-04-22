import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./source/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },

  plugins: [],
};

export default config;
