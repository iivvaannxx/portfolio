import { fontFamily, screens } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

import pluginMaskImage from "tailwind-gradient-mask-image";
import pluginFluidType from "tailwindcss-fluid-type";
import pluginDebugScreens from "tailwindcss-debug-screens";
import pluginAnimated from "tailwindcss-animated";

const config: Config = {
  content: ["./source/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  safelist: ["dark"],

  plugins: [
    pluginFluidType({
      values: {
        "3xs": [-4, 1.6],
        "2xs": [-3, 1.6],
      },

      settings: {
        fontSizeMin: 1,
      },
    }),

    pluginMaskImage,
    pluginDebugScreens,
    pluginAnimated,
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
    },

    screens: {
      fold: "280px",
      xs: "375px",
      ...screens,
    },

    extend: {
      height: {
        header: "var(--header-height)",
        content: "var(--content-height)",
      },

      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",

        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",

        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },

        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)",
        },

        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },

        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },

        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },

        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      fontFamily: {
        sans: ["Satoshi", ...fontFamily.sans],
        header: ["Onest", "Arial", "Liberation Sans", "sans-serif"],
        mono: ["Monaspace Neon", "Monaspace Neon Fallback", ...fontFamily.mono],
      },

      keyframes: {
        "beat": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },

        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },

        "float": {
          "0%": { translate: "0px 0px" },
          "50%": { translate: "0px -15px" },
          "100%": { translate: "0px 0px" },
        },
      },

      animation: {
        "beat": "beat 1s infinite",
        "fade-in": "fade-in 1s forwards",
        "fade-out": "fade-out 1s forwards",
        "float": "float 3s infinite alternate ease-in-out",
      },
    },
  },
};

export default config;
