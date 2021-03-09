<template>
  <figure>
    <nuxt-link
      :to="`/shop/${path}/${item.slug}`"
      class="block shadow-xl ring-1 ring-app-blue-gray border-app-dark-gray"
    >
      <div role="presentation" class="relative pb-full">
        <img
          class="absolute inset-0 object-cover object-center w-full h-full"
          :src="`/articles/${item.image}`"
          :alt="item.name"
        />
      </div>
    </nuxt-link>
    <figcaption
      class="relative flex flex-col w-5/6 px-3 py-5 mx-auto -mt-8 rounded-md shadow-lg h-28 bg-app-dark-gray text-app-white"
    >
      <div class="flex justify-between">
        <nuxt-link :to="`/shop/${path}/${item.slug}`"
          ><h1 class="font-serif text-xl">{{ item.name }}</h1></nuxt-link
        >
        <p class="text-base font-bold">{{ getEuro(item.price) }}</p>
      </div>
      <button
        class="self-center mt-auto text-lg font-bold uppercase border-b border-app-white focus:outline-none"
      >
        Add to cart
      </button>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    item: {
      type: Object,
      default: () => {},
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
