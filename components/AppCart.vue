<template>
  <NuxtLink class="relative" to="/cart">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="w-8 h-8 fill-current text-app-blue-gray"
    >
      <path
        d="M19,7H16V6A4,4,0,0,0,8,6V7H5A1,1,0,0,0,4,8V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM10,6a2,2,0,0,1,4,0V7H10Zm8,13a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H8v1a1,1,0,0,0,2,0V9h4v1a1,1,0,0,0,2,0V9h2Z"
      />
    </svg>
    <div
      class="absolute flex items-center justify-center w-5 h-5 p-1 text-center rounded-full shadow-md bg-app-dark-gray text-app-white -top-2 -right-2"
    >
      <span class="font-serif text-base font-light">{{ cartLength }}</span>
    </div>
  </NuxtLink>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style></style>
