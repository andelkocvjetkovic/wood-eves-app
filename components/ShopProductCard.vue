<template>
  <figure class="relative overflow-hidden rounded-sm">
    <div
      role="presentation"
      class="absolute inset-0 w-full h-full shadow bg-app-blue-gray"
      style="clip-path: polygon(0 20%, 100% 58%, 100% 100%, 0% 100%)"
    ></div>
    <NuxtLink :to="`${path}${item.slug}`" class="relative block p-2">
      <div
        role="presentation"
        class="relative overflow-hidden rounded-sm shadow-lg pb-full"
      >
        <NuxtImg
          class="absolute inset-0 object-cover object-center w-full h-full"
          :src="`/articles/${item.slug}/${item.heroImage}`"
          :alt="item.name"
          sizes="xs:100vw"
          quality="80"
          fit="cover"
          loading="lazy"
        />
      </div>
    </NuxtLink>
    <figcaption class="relative flex flex-col w-full px-3 py-4 text-app-white">
      <div class="flex justify-between">
        <nuxt-link :to="`${path}${item.slug}`"
          ><h1 class="font-serif text-xl font-semibold capitalize md:text-base">
            {{ item.name }}
          </h1></nuxt-link
        >
        <p class="text-base font-bold md:text-sm">
          from {{ getEuro(item.startPrice) }}
        </p>
      </div>
      <button
        class="self-center mt-1 text-lg font-bold uppercase border-b md:mt-3 md:text-base"
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
      return `${number} $`;
    },
  },
};
</script>
