import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#390089",
        secondary: "#D9488F",
      },
      fontFamily: {
        alex: ["Alexandria", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
