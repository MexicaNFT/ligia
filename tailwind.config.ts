import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fbf9f8",
        foreground: "#1b1c1c",
        surface: "#fbf9f8",
        "surface-container": "#f0eded",
        "surface-container-low": "#f6f3f2",
        "surface-container-high": "#eae8e7",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#1b1c1c",
        "on-surface-variant": "#44474c",
        "on-background": "#1b1c1c",
        primary: "#000000",
        "on-primary": "#ffffff",
        "primary-container": "#0f1c2c",
        "on-primary-container": "#778598",
        "primary-fixed": "#d6e4f9",
        "primary-fixed-dim": "#bac8dc",
        secondary: "#5e5f5c",
        "secondary-container": "#e0e0dc",
        "on-secondary-container": "#626360",
        "tertiary-fixed": "#ffddbb",
        "on-tertiary-container": "#9c7f61",
        "outline": "#74777d",
        "outline-variant": "#c4c6cc",
        "inverse-surface": "#303030",
        "inverse-on-surface": "#f3f0f0",
      },
      fontFamily: {
        serif: ["Newsreader", "serif"],
        sans: ["Work Sans", "sans-serif"],
        display: ["Newsreader", "serif"],
        body: ["Work Sans", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "400" }],
        "headline-xl": ["48px", { lineHeight: "1.2", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1.2", letterSpacing: "0.1em", fontWeight: "600" }],
        "body-lg": ["20px", { lineHeight: "1.7", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
      },
      spacing: {
        "section-gap": "8rem",
        "gutter": "2rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
