import antfu from "@antfu/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();
export default antfu(

  {
    astro: true,
    lessOpinionated: true,

    stylistic: { quotes: "double", semi: true },
    typescript: { tsconfigPath: "./tsconfig.json" },
  },

  ...compat.config({

    extends: ["plugin:tailwindcss/recommended"],
    rules: {
      "tailwindcss/classnames-order": "error",
      "tailwindcss/no-custom-classname": "off",
    },

    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
      },
    ],
  }),

).append({

  languageOptions: {
    globals: {
      Fragment: "readonly",
    },
  },
});
