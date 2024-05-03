/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
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
