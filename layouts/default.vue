<template>
  <div>
    <ClientOnly>
      <LazyTheHeaderDeviceSmall v-if="isMobile" />
      <LazyTheHeaderDeviceLarge v-else />
    </ClientOnly>
    <Nuxt class="min-h-screen bg-app-white text-app-dark-gray" />
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
