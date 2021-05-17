module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier-vue/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "prettier-vue/prettier": "error",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-var": 0,
    eqeqeq: "off",
    "vue/singleline-html-element-content-newline": ["off"],
    "no-console": process.env.NODE_ENV == "production" ? 2 : 1,
    "vue/v-slot-style": ["error", "longform"],
  },
};

/**
    "off" or 0 - turn the rule off
    "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
    "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
 */
