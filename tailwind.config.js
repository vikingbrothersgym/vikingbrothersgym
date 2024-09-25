/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

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
        third: "#FBA92C",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
  corePlugins: {
    preflight: false,
  },
}

