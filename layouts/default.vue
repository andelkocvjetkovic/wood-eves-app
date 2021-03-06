<template>
  <div>
    <lazy-app-header-md v-if="$mq === 'md'" />
    <lazy-app-header-lg v-else-if="$mq === 'lg'" />
    <Nuxt class="pt-20 lg:pt-0" />
    <app-footer />
    <client-only>
      <portal-target name="navModal"> </portal-target>
    </client-only>
  </div>
</template>

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
