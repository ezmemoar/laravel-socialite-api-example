import { themeColor } from "./src/config/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: themeColor,
    },
  },
  plugins: [],
};
