import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      sm: "810px",
      md: "1200px",
      lg: "1920px",
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"], // ✅ works with next/font
      },

      colors: {
        heading: "#0C0F12",
        headingAlt: "#313D49",
        dark: "#000000",
        accent: "#215BEE",
        muted: "#7C8792",
        body: "#4E5B6D",

        neutral: {
          50: "#FFFFFF",
          100: "#F4F4F4",
          200: "#7C8792",
          400: "#313D49",
          800: "#0C0F12",
          900: "#000000",
          950: "#020617",
        },

        primary: {
          100: "#B8CCFF",
          200: "#87A9FF",
          300: "#5686FF",
          400: "#215BEE",
          DEFAULT: "#215BEE",
          hover: "#215BEE",
        },
      },
    },
  },

  plugins: [],
};

export default config;
