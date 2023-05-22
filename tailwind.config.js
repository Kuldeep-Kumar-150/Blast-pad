/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   "Inter": ["Inter", ...defaultTheme.fontFamily.sans]
      // },
      // fontFamily: {
      //   "Raleway": ["Raleway", ...defaultTheme.fontFamily.sans]
      // }
    },
  },
  plugins: [],
}

