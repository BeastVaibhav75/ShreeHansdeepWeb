import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: "#faf8f5",
          100: "#f5f0e8",
          200: "#e8ddd0",
          300: "#d4c2a8",
          400: "#b89d7a",
          500: "#9d7a5a",
          600: "#8b6b4d",
          700: "#735a42",
          800: "#5f4b38",
          900: "#4f3f30",
        },
        charcoal: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
        },
        forest: {
          50: "#f0f7f4",
          100: "#dceee5",
          200: "#bddccb",
          300: "#92c2a8",
          400: "#62a17e",
          500: "#3d8560",
          600: "#2d6a4d",
          700: "#255640",
          800: "#214636",
          900: "#1d3b2e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;


