const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./components/**/*.{vue,js}",

      "./layouts/**/*.vue",

      "./pages/**/*.vue",

      "./plugins/**/*.{js}",

      "./nuxt.config.{js}",
    ],
  },
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
      height: (theme) => ({
        "screen/75": "75vh",
        "screen/50": "50vh",
        "screen/33": "calc(100vh / 3)",
        "screen/25": "calc(100vh / 4)",
        "screen/20": "calc(100vh / 5)",
      }),
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "app-dark-gray": "#1E293B",
      "app-light-gray": "#E2E8F0",
      "app-white": "#F8FAFC",
      "app-accent": "#D6AD60",
      "app-blue-gray": "#334155",
      black: colors.black,
      white: colors.white,
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
