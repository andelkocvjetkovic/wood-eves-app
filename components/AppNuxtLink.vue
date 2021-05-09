<template>
  <NuxtLink
    v-bind="$attrs"
    class="transition-colors duration-100 ease-in-out border-b border-transparent border-opacity-0 lg:hover:border-current"
  >
    <slot />
  </NuxtLink>
</template>
<script>
export default {};
</script>
