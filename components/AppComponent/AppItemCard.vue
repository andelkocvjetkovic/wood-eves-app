<template>
  <figure>
    <nuxt-link
      :to="`${path}${item.slug}`"
      class="block shadow-xl ring-1 ring-app-blue-gray border-app-dark-gray lg:p-3"
    >
      <div role="presentation" class="relative pb-full">
        <nuxt-img
          class="absolute inset-0 object-cover object-center w-full h-full"
          :src="`/articles/${item.image}`"
          :alt="item.name"
          sizes="xs:320px"
          quality="80"
          fit="cover"
          loading="lazy"
        />
      </div>
    </nuxt-link>
    <figcaption
      class="relative flex flex-col w-5/6 px-3 py-5 mx-auto -mt-8 rounded-md shadow-lg lg:px-2 bg-app-dark-gray text-app-white"
    >
      <div class="flex justify-between">
        <nuxt-link :to="`${path}${item.slug}`"
          ><h1 class="font-serif text-xl">{{ item.name }}</h1></nuxt-link
        >
        <p class="text-base font-bold">{{ getEuro(item.price) }}</p>
      </div>
      <button
        class="self-center mt-2 text-lg font-bold uppercase border-b md:mt-3 border-app-white focus:outline-none"
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
