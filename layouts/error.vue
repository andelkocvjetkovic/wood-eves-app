<template>
  <main class="py-6 bg-app-white text-app-dark-gray">
    <article
      class="px-4 mt-6 text-center lg:mt-8 xs:px-0 xs:max-w-sm xs:mx-auto lg:max-w-xl"
    >
      <h1 class="text-lg sm:text-2xl xl:text-3xl">
        {{ error.message }}
      </h1>
      <h2 class="mt-3 text-xl font-bold sm:text-3xl lg:text-3xl xl:text-4xl">
        {{ error.statusCode }}
      </h2>

      <NuxtLink
        class="inline-block px-4 py-1 mt-6 uppercase transition-colors duration-150 ease-out rounded-sm shadow-md lg:hover:bg-app-accent lg:hover:text-app-white lg:mt-8 lg:px-6 lg:text-lg lg:font-medium ring-1 ring-app-accent focus:outline-none focus-visible:bg-app-accent focus-visible:text-app-white active:text-app-accent"
        to="/"
        >Return Home</NuxtLink
      >
      <notFound class="mt-8 lg:mt-10" />
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
