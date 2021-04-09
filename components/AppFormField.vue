<template>
  <div class="flex flex-col w-full mt-12">
    <label class="sr-only" :for="label">{{ label }}</label>
    <input
      class="p-2 font-serif transition-colors duration-100 bg-transparent border-b focus:outline-none border-app-white-gray focus:border-app-accent placeholder-app-white"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
