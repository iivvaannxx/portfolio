import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./source/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        card: "hsl(var(--card))",
        destructive: "hsl(var(--destructive))",
        muted: "hsl(var(--muted))",

        foreground: "hsl(var(--foreground))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        "card-foreground": "hsl(var(--card-foreground))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        "muted-foreground": "hsl(var(--muted-foreground))",

        ring: "hsl(var(--ring))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",

        "gradient-start": "var(--gradient-start)",
        "gradient-end": "var(--gradient-end)",
      },

      fontFamily: {
        sans: ["Satoshi-Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
};

export default config;
