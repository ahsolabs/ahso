import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        dark: "#0b1220",
      },
      fontFamily: {
        display: ["var(--font-display)", "Poppins", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 10px 40px -12px rgba(99, 102, 241, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
