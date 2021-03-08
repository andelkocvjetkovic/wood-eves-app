<template>
  <div>
    <client-only>
      <lazy-app-header-mobile v-if="isMobile" />
      <lazy-app-header-large v-else />
    </client-only>
    <Nuxt />
    <app-footer />
    <client-only>
      <portal-target name="navModal" />
    </client-only>
  </div>
</template>
<script>
export default {
  computed: {
    isMobile() {
      return !this.$device?.tablet;
    },
  },
};
</script>
<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
.splide__list {
  will-change: auto !important;
}
</style>
¸
