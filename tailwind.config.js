const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
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
        "screen/75vh": "75vh",
        "screen/50vh": "50vh",
        "screen/33vh": "calc(100vh / 3)",
        "screen/25vh": "calc(100vh / 4)",
        "screen/20vh": "calc(100vh / 5)",
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
      "app-red": colors.red[600],
      "app-green": colors.green[600],
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
      scale: ["group-hover"],
      ringWidth: ["checked", "focus-visible", "group-focus"],
      ringColor: ["checked", "focus-visible"],
      textColor: ["active", "focus-visible"],
      backgroundColor: ["focus-visible", "active"],
      opacity: ["disabled"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".flex-basis-full": {
          "flex-basis": "100%",
        },
        ".flex-basis-25": {
          "flex-basis": "25%",
        },
        ".flex-basis-33": {
          "flex-basis": "33.333%",
        },
        ".flex-basis-50": {
          "flex-basis": "50%",
        },
        ".flex-basis-75": {
          "flex-basis": "75%",
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    }),
  ],
};
