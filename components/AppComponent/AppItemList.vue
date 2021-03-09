<template>
  <section class="max-w-xs mx-auto">
    <div v-for="item in itemList" :key="item.uuid" class="py-4 mt-24">
      <figure class="mt-6">
        <nuxt-link
          :to="`/shop/${getPath}/${item.slug}`"
          class="block shadow-2xl ring-1 ring-app-blue-gray border-app-dark-gray"
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
          class="relative flex flex-col w-5/6 h-32 px-3 py-5 mx-auto -mt-12 rounded-md shadow-md bg-app-dark-gray text-app-white"
        >
          <div class="flex justify-between">
            <nuxt-link :to="`/shop/${getPath}/${item.slug}`"
              ><h1 class="font-serif text-2xl">{{ item.name }}</h1></nuxt-link
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
    </div>
  </section>
</template>

<script>
export default {
  props: {
    itemList: {
      type: [Object, Array],
      default: () => {},
    },
  },
  computed: {
    getPath() {
      var path = this.itemList[0].path.split("/");
      return path[2];
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
