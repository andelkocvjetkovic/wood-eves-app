<template>
  <div class="max-w-xs mx-auto mt-12">
    <figure>
      <div class="relative pb-full" role="presentation">
        <img
          class="absolute inset-0 object-cover object-center w-full h-full"
          :src="`/articles/${item.image}`"
          :alt="item.name"
        />
      </div>
    </figure>
    <figcaption
      class="flex flex-col items-center justify-center mt-6 space-y-5"
    >
      <header class="flex flex-col items-start w-full space-y-2">
        <h1 class="text-3xl font-semibold">{{ item.name }}</h1>
        <p class="text-xl font-semibold underline">
          {{ getEuro(item.price) }}
        </p>
      </header>
      <p class="text-sm">{{ item.description }}</p>
      <button
        type="button"
        class="self-start px-6 py-2 text-lg rounded bg-app-dark-gray text-app-white"
      >
        Add to card
      </button>
    </figcaption>
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
