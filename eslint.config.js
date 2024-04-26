import antfu from "@antfu/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();
export default antfu(

  {
    astro: true,
    formatters: true,

    lessOpinionated: true,
    stylistic: {

      quotes: "double",
      semi: true,
      overrides: {

        "style/arrow-parens": ["error", "always"],
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

    rules: {

      // "style/max-len": ["error", { code: 90, tabWidth: 2 }],
    },
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
);
