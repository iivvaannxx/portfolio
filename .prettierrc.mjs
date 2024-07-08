/** @type {import("prettier").Config} */
export default {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-svelte",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
    {
      files: "*.glsl",
      options: {
        parser: "glsl-parser",
      },
    },
  ],

  astroAllowShorthand: true,
  bracketSpacing: true,
  bracketSameLine: false,

  printWidth: 80,
  quoteProps: "consistent",

  semi: true,
  singleQuote: false,
  singleAttributePerLine: true,

  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
};
