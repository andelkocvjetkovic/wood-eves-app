<template>
  <main class="px-2 pb-12 xs:max-w-sm xs:mx-auto sm:max-w-md lg:max-w-xl">
    <article class="mt-6 text-center lg:mt-8">
      <h1 class="text-lg sm:text-xl lg:text-2xl xl:text-3xl">
        {{ error.message }}
      </h1>
      <h2 class="pb-px text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
        {{ error.statusCode }}
      </h2>

      <NuxtLink
        class="inline-block px-4 py-1 mt-4 uppercase transition-colors duration-150 ease-out rounded-sm shadow-md lg:hover:bg-app-accent lg:hover:text-app-white lg:mt-8 lg:px-6 lg:text-lg lg:font-medium ring-1 ring-app-accent focus:outline-none focus-visible:bg-app-accent focus-visible:text-app-white active:text-app-accent"
        to="/"
        >Return Home</NuxtLink
      >
      <notFound class="mt-8" />
    </article>
  </main>
</template>

<script>
import notFound from "~/assets/svg/notFound.svg";
export default {
  components: {
    notFound,
  },
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
