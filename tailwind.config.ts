import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

// These packages are not typed.
import tailwindcssAnimated from "tailwindcss-animated";
import tailwindDebugScreens from "tailwindcss-debug-screens";
import tailwindGridAreas from "@savvywombat/tailwindcss-grid-areas";

const config = {
  darkMode: "class",
  content: ["./source/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    screens: {
      fold: "280px",
      xs: "375px",
      ...defaultTheme.screens,
    },

    extend: {
      content: {
        empty: "''",
      },

      spacing: {
        header: "64px",
      },

      height: {
        "header": "var(--header-height)",
        "main": "var(--main-height)",
        "screen-safe": "var(--screen-safe-height)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      fontFamily: {
        sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
        header: ["Onest", "Arial", "Liberation Sans", "sans-serif"],

        mono: [
          "Monaspace Neon",
          "Monaspace Neon Fallback",
          ...defaultTheme.fontFamily.mono,
        ],
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "background-shine": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "beat": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "background-shine": "background-shine 2s linear infinite",
        "beat": "beat 1s infinite",
      },

      gridTemplateAreas: {
        "hero-h": ["content canvas"],
        "hero-v": [
          // prettier-ignore
          "content",
          "canvas",
        ],
      },

      gridTemplateColumns: {
        "hero-h": "auto minmax(0, 50%)",
        "hero-v": "1fr",
      },

      gridTemplateRows: {
        "hero-h": "1fr",
        "hero-v": "auto minmax(0, 50%)",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    tailwindcssAnimated,
    tailwindGridAreas,
    tailwindDebugScreens,
  ],
} satisfies Config;

export default config;
