import antfu from "@antfu/eslint-config";

export default antfu(
  {
    astro: true,
    svelte: true,
    lessOpinionated: true,

    formatters: false,
    stylistic: false,
    typescript: { tsconfigPath: "./tsconfig.json" },
  },

  {
    languageOptions: {
      globals: {
        Fragment: "readonly",
      },
    },
  },
);
