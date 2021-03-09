<template>
  <section class="max-w-xs mx-auto">
    <div v-for="item in itemList" :key="item.uuid" class="mt-24">
      <nuxt-link :to="`/shop/${getPath}/${item.slug}`"
        ><h1 class="font-serif text-2xl">{{ item.name }}</h1></nuxt-link
      >
      <figure class="mt-6">
        <nuxt-link :to="`/shop/${getPath}/${item.slug}`" class="block">
          <div role="presentation" class="relative pb-full">
            <img
              class="absolute inset-0 object-cover object-center w-full h-full"
              :src="`/articles/${item.image}`"
              :alt="item.name"
            />
          </div>
        </nuxt-link>
        <figcaption class="mt-6">
          <p class="text-xl font-bold">{{ getEuro(item.price) }}</p>
          <button
            class="block w-1/2 px-6 py-2 mx-auto mt-4 text-base font-bold uppercase bg-app-accent text-app-white"
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
