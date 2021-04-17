<template>
  <p class="flex items-center pl-1 mt-1 space-x-2 text-sm">
    <input
      type="radio"
      class="w-3 h-3 text-app-accent ring-0 checked:ring-2 checked:ring-app-accent"
      v-bind="$attrs"
      v-on="$listeners"
    />
    <slot></slot>
  </p>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style></style>
