<template>
  <div class="xs:max-w-xs xs:mx-auto md:max-w-none md:mx-0 md:w-full">
    <aside
      v-for="item in $options.categoryItems"
      :key="item.img"
      class="mt-8 md:flex-basis-33 md:mt-0 md:p-1 lg:p-3 xl:p-5"
    >
      <figure class="relative overflow-hidden group">
        <nuxt-img
          :src="item.img"
          :alt="item.name"
          quality="80"
          sizes="xs:320px md:640px"
          fit="cover"
          class="absolute inset-0 object-cover object-center w-full h-full transition-transform duration-200 lg:ease-out lg:transform lg:group-hover:scale-110"
        />
        <figcaption
          class="relative flex flex-col items-center px-8 py-6 space-y-8 bg-black bg-opacity-50 md:px-9 md:space-y-10 lg:py-8 lg:space-y-12 lg:transition-opacity lg:duration-300 lg:ease-out lg:transform lg:opacity-0 lg:group-hover:opacity-100 text-app-white"
        >
          <h2 class="font-serif text-2xl">
            {{ item.name }}
          </h2>
          <p class="text-center">
            {{ item.description }}
          </p>
          <nuxt-link
            :to="`/shop/${item.slug}`"
            class="px-6 py-1 text-base font-semibold uppercase duration-200 border rounded-sm shadow-md lg:transition-colors lg:transition-opacity xs:px-8 xs:py-2 md:text-base border-app-white bg-app-white text-app-dark-gray lg:hover:bg-opacity-0 lg:hover:text-app-white"
          >
            Sehen
          </nuxt-link>
        </figcaption>
      </figure>
    </aside>
  </div>
</template>
<script>
export default {
  categoryItems: [
    {
      name: "Tish",
      img: "category-tish.jpg",
      slug: "tish",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti labore accusamus est neque! Recusandae nulla voluptatum modi dicta aliquid.",
    },
    {
      name: "Stühle",
      img: "category-stuhle.jpg",
      slug: "stuhle",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti labore accusamus est neque! Recusandae nulla voluptatum modi dicta aliquid.",
    },
    {
      name: "Accessoires",
      img: "category-accessoires.jpg",
      slug: "accessoires",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti labore accusamus est neque! Recusandae nulla voluptatum modi dicta aliquid.",
    },
  ],
};
</script>
