<template>
  <div class="xs:max-w-xs xs:mx-auto md:max-w-none md:w-full">
    <figure class="grid-cols-2 md:grid md:gap-x-4 xl:gap-x-1/6">
      <div
        class="relative pb-full md:pb-0 md:order-last md:flex md:justify-center md:items-center"
        role="presentation"
      >
        <nuxt-img
          class="absolute inset-0 object-cover object-center w-full h-full md:static md:object-contain"
          :src="`/articles/${item.image}`"
          :alt="item.name"
          sizes="xs:320px sm:380px md:720px"
          quality="80"
          fit="contain"
        />
      </div>
      <figcaption
        class="flex flex-col items-center justify-center mt-6 space-y-5 lg:justify-around lg:space-y-0"
      >
        <header class="flex flex-col items-start w-full space-y-2">
          <h1 class="text-3xl font-semibold lg:text-4xl">{{ item.name }}</h1>
          <p class="text-xl font-semibold underline lg:text-2xl">
            {{ getEuro(item.price) }}
          </p>
        </header>
        <p class="prose-sm prose md:pr-4">{{ item.description }}</p>
        <button
          type="button"
          class="self-start px-6 py-2 text-lg rounded shadow lg:font-semibold bg-app-dark-gray text-app-white"
        >
          Add to card
        </button>
      </figcaption>
    </figure>
    <pre>{{ item.variants }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getEuro(number) {
      return `${number} €`;
    },
  },
};
</script>

<style></style>
