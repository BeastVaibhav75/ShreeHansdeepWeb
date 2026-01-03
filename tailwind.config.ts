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
          50: "#faf7f2",
          100: "#f5ede0",
          200: "#e8d9c4",
          300: "#d9c2a0",
          400: "#c9a87a",
          500: "#b8945f",
          600: "#a67d4f",
          700: "#8b6642",
          800: "#72543a",
          900: "#5d4530",
          950: "#3d2e1f",
        },
        charcoal: {
          50: "#f6f5f3",
          100: "#e8e5e0",
          200: "#d1ccc2",
          300: "#b3ab9d",
          400: "#948a78",
          500: "#7a6f5d",
          600: "#645a4b",
          700: "#524a3f",
          800: "#453f36",
          900: "#3c362f",
          950: "#1f1b16",
        },
        // Keeping forest for backward compatibility but making it more wooden
        forest: {
          50: "#f5ede0",
          100: "#e8d9c4",
          200: "#d9c2a0",
          300: "#c9a87a",
          400: "#b8945f",
          500: "#a67d4f",
          600: "#8b6642",
          700: "#72543a",
          800: "#5d4530",
          900: "#3d2e1f",
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



