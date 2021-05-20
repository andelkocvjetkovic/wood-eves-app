<template functional>
  <NuxtLink
    v-bind="data.attrs"
    :class="[
      data.class,
      data.staticClass,
      'transition-colors duration-100 ease-in-out border-b border-transparent border-opacity-0 lg:hover:border-current',
    ]"
    v-on="listeners"
  >
    <slot />
  </NuxtLink>
</template>
<script>
export default {};
</script>
