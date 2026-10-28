/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#303030",
        secondary: "#FF0000",
        third: "#FBA92C",
      },
      fontFamily: {
        viking: ["Caesar Dressing", "cursive"],
        body: ["Roboto", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
  corePlugins: {
    preflight: false,
  },
};