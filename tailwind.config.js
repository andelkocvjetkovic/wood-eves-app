const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors");
module.exports = {
  purge: [
    "./components/**/*.{vue,js}",

    "./layouts/**/*.vue",

    "./pages/**/*.vue",

    "./plugins/**/*.{js,ts}",

    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        serif: ["Bitter", ...defaultTheme.fontFamily.serif],
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        full: "100%",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "app-dark-gray": "#1E293B",
      "app-light-gray": "#E2E8F0",
      "app-white": "#F8FAFC",
      "app-accent": "#86626E",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
