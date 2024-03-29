export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "wood-elves-app",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  publicRuntimeConfig: {
    stripePublic: process.env.STRIPE_PUBLIC_KEY,
  },
  privateRuntimeConfig: {},
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "vue-slick-carousel/dist/vue-slick-carousel.css",
    "~/assets/css/vue-slick.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/gsap.client.js",
    "~/plugins/portal-vue.client.js",
    "~/plugins/vue-device-queries.client.js",
    "~/plugins/vue-slick-carousel.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "nuxt-svg-loader",
  ],
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap", "portal-vue", "vue-device-queries"],
  },
  googleFonts: {
    families: {
      Raleway: true,
      Bitter: [400, 600, 700],
    },
    display: "swap",
    preconnect: true,
  },
  generate: {
    fallback: true,
    exclude: ["/checkout"],
  },
  pageTransition: {
    css: false,
    mode: "out-in",
    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.3,
        ease: "sine.out",
        onComplete: done,
      });
    },
    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.25,
        ease: "sine.in",
        onComplete: done,
      });
    },
  },
  router: {
    linkExactActiveClass: "text-app-accent",
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    intersectOptions: {
      rootMargin: "50px",
    },
  },
  tailwindcss: {
    jit: true,
  },
  postcss: {
    plugins: {
      "postcss-focus-visible": {},
    },
  },
  svgLoader: {
    svgoConfig: {
      plugins: [
        {
          removeUnknownsAndDefaults: {
            unknownContent: false,
            unknownAttrs: false,
            defaultAttrs: false,
            uselessOverrides: true,
            keepDataAttrs: true,
            keepAriaAttrs: true,
            keepRoleAttr: true,
          },
        },
        { removeTitle: false },
        { cleanupIDs: false },
        { prefixIds: false },
      ],
    },
  },
};
