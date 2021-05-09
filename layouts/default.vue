<template>
  <div>
    <ClientOnly>
      <LazyTheHeaderDeviceSmall v-if="isMobile" />
      <LazyTheHeaderDeviceLarge v-else />
    </ClientOnly>
    <Nuxt />
    <TheFooter />
    <ClientOnly>
      <PortalTarget name="modalWindow" />
    </ClientOnly>
  </div>
</template>
<script>
export default {
  computed: {
    isMobile() {
      return !this.$device?.tablet;
    },
    currentRoute() {
      return this.$route;
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
</style>
