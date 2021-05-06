<template>
  <article class="xs:max-w-xs xs:mx-auto md:max-w-none md:mx-0 md:w-full">
    <div
      v-for="item in $options.categoryItems"
      :key="item.name"
      class="mt-8 md:flex-basis-33 md:mt-0 md:p-1 lg:p-3 xl:p-4"
    >
      <figure class="relative min-h-full overflow-hidden group">
        <NuxtImg
          sizes="xs:100vw sm:50vw md:40vw lg:60vw"
          :src="item.img"
          :alt="item.name"
          quality="80"
          fit="cover"
          class="absolute inset-0 object-cover object-center w-full h-full transition-transform duration-200 lg:ease-out lg:transform lg:group-hover:scale-110"
        />
        <figcaption
          class="relative flex flex-col items-center p-8 space-y-8 bg-black bg-opacity-50 md:px-4 md:space-y-10 lg:px-8 lg:py-12 lg:space-y-12 xl:space-y-16 lg:transition-opacity lg:duration-300 lg:ease-out lg:transform lg:opacity-0 lg:group-hover:opacity-100 text-app-white"
        >
          <h2 class="font-serif text-2xl font-semibold text-center">
            {{ item.name }}
          </h2>
          <p class="text-center">
            {{ item.description }}
          </p>
          <NuxtLink
            :to="`/shop/${item.slug}`"
            class="px-6 py-1 text-base font-semibold uppercase duration-200 border rounded-sm shadow-md lg:transition-colors md:transition-opacity xs:px-8 xs:py-2 md:text-base border-app-white bg-app-white text-app-dark-gray lg:hover:bg-opacity-0 lg:hover:text-app-white"
          >
            View
          </NuxtLink>
        </figcaption>
      </figure>
    </div>
  </article>
</template>
<script>
export default {
  categoryItems: [
    {
      name: "Cutting Boards",
      img: "category-cutting-boards.jpg",
      slug: "cutting-boards",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti labore accusamus est neque! Recusandae nulla voluptatum modi dicta aliquid.",
    },
    {
      name: "Chair",
      img: "category-stuhle.jpg",
      slug: "chair",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti labore accusamus est neque! Recusandae nulla voluptatum modi dicta aliquid.",
    },
    {
      name: "Accessoires",
      img: "/articles/darfin/darfin_5.jpg",
      slug: "accessoires",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti labore accusamus est neque! Recusandae nulla voluptatum modi dicta aliquid.",
    },
  ],
};
</script>
