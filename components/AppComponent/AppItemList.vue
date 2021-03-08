<template>
  <section class="max-w-xs mx-auto">
    <div v-for="item in itemList" :key="item.uuid" class="mt-24">
      <nuxt-link :to="`${getPath}/${item.slug}`"
        ><h1 class="font-serif text-2xl">{{ item.name }}</h1></nuxt-link
      >
      <figure class="mt-6">
        <div role="presentation" class="relative pb-2/3">
          <img
            class="absolute inset-0 w-full h-full"
            :src="`/articles/${item.image}`"
            :alt="item.name"
          />
        </div>
        <figcaption class="mt-6">
          <p class="text-xl font-bold">{{ getEuro(item.price) }}</p>
          <button
            class="block w-1/2 px-6 py-2 mx-auto mt-4 text-base font-bold bg-app-accent text-app-white"
          >
            Buy now {{ getPath }}
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
      return this.itemList[0].path.split("/")[2];
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
