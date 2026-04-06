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
        navy: {
          50: "#f0f4f9",
          100: "#dae3f0",
          200: "#b8cce1",
          300: "#8aaacb",
          400: "#5a83b1",
          500: "#3a6496",
          600: "#2b4f7a",
          700: "#1e3a5f",
          800: "#152847",
          900: "#0e1c32",
          950: "#080f1c",
        },
        sage: {
          50: "#f2f7f2",
          100: "#e1ede1",
          200: "#c3dbc4",
          300: "#97c09a",
          400: "#669e6b",
          500: "#4a8050",
          600: "#38653d",
          700: "#2d5132",
          800: "#264229",
          900: "#1f3622",
        },
        cream: "#faf8f4",
        warm: "#f5f0e8",
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "'Times New Roman'", "serif"],
        body: ["'Trebuchet MS'", "Helvetica", "Arial", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
