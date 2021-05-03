<template>
  <div>
    <nav class="flex items-center justify-center w-full py-4">
      <LogoIcon class="w-16 h-16" />
    </nav>
    <Nuxt />
    <ClientOnly>
      <PortalTarget name="modalWindow" />
    </ClientOnly>
  </div>
</template>

<script>
import LogoIcon from "~/assets/svg/logoIcon.svg";
export default {
  components: {
    LogoIcon,
  },
};
</script>

<style></style>
