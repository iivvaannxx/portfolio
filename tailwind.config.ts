import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: ["./source/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          // biome-ignore lint/style/useNamingConvention: Tailwind requires this to be uppercase.
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          // biome-ignore lint/style/useNamingConvention: Tailwind requires this to be uppercase.
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          // biome-ignore lint/style/useNamingConvention: Tailwind requires this to be uppercase.
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          // biome-ignore lint/style/useNamingConvention: Tailwind requires this to be uppercase.
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          // biome-ignore lint/style/useNamingConvention: Tailwind requires this to be uppercase.
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          // biome-ignore lint/style/useNamingConvention: Tailwind requires this to be uppercase.
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          // biome-ignore lint/style/useNamingConvention: Tailwind requires this to be uppercase.
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gradient: {
          start: "var(--gradient-start)",
          end: "var(--gradient-end)",
        },
      },

      fontFamily: {
        sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
        mono: [
          "Monaspace Neon",
          "Monaspace Neon Fallback",
          ...defaultTheme.fontFamily.mono,
        ],
      },

      animation: {
        "background-shine": "background-shine 2s linear infinite",
      },

      keyframes: {
        "background-shine": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },

  plugins: [],
};

export default config;
