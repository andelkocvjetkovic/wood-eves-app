<template>
  <figure class="relative overflow-hidden rounded-sm">
    <div
      role="presentation"
      class="absolute inset-0 w-full h-full rounded-md shadow bg-app-dark-gray"
      style="clip-path: polygon(0 20%, 100% 58%, 100% 100%, 0% 100%)"
    ></div>
    <NuxtLink :to="`${getPath}${item.slug}`" class="relative block p-1">
      <div
        role="presentation"
        class="relative overflow-hidden rounded-sm shadow pb-full"
      >
        <NuxtImg
          class="absolute inset-0 object-cover object-center w-full h-full"
          :src="`/articles/${item.slug}/${item.heroImage}`"
          :alt="item.name"
          sizes="xs:100vw sm:50vw md:33vw lg:33vw"
          quality="80"
          fit="cover"
          loading="lazy"
        />
      </div>
    </NuxtLink>
    <figcaption
      class="relative flex flex-col w-full px-4 pb-5 mt-1 text-white xs:px-2 xl:px-4"
    >
      <div class="flex items-center justify-between">
        <NuxtLink :to="`${getPath}${item.slug}`"
          ><h1
            class="font-serif text-xl font-semibold capitalize xs:text-base sm:text-sm xl:text-base"
          >
            {{ item.name }}
          </h1></NuxtLink
        >
        <p class="text-base xs:text-sm sm:text-xs xl:text-sm">
          from
          <span class="font-semibold">{{ getEuro(item.startPrice) }} </span>
        </p>
      </div>
      <NuxtLink
        :to="`${getPath}${item.slug}`"
        class="self-center mt-1 text-lg font-bold tracking-wide capitalize border-b xs:text-base sm:text-sm lg:text-base lg:mt-1"
      >
        View Item <span>&#8594;</span>
      </NuxtLink>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    getPath() {
      var path = this.item.path.split("/");
      return `/shop/${path[2]}/`;
    },
  },
  methods: {
    getEuro(number) {
      return `${number} $`;
    },
  },
};
</script>
