import antfu from "@antfu/eslint-config";

export default antfu(
  {
    astro: true,
    lessOpinionated: true,
    formatters: false,

    stylistic: {
      quotes: "double",
      semi: true,

      overrides: {
        "style/arrow-parens": ["error", "always"],
        "sort-imports": "off",
      },
    },

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
