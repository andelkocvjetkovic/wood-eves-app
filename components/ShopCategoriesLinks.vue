<template functional>
  <article :class="[data.class, data.staticClass]" class="pt-px">
    <div
      v-for="item in props.categoryList"
      :key="item.name"
      class="flex-grow flex-shrink-0 md: flex-basis-25"
    >
      <figure
        class="relative overflow-hidden rounded-sm group"
        style="padding-bottom: 133%"
      >
        <NuxtImg
          :src="item.img"
          :alt="item.name"
          loading="lazy"
          quality="80"
          fit="cover"
          sizes="xs:100vw sm:70vw md:40vw lg:50vw"
          class="absolute inset-0 object-cover object-center w-full h-full transition-transform duration-300 lg:ease-out lg:transform lg:group-hover:scale-110"
        />
        <figcaption
          class="absolute inset-0 flex flex-col items-center justify-around p-8 bg-black bg-opacity-50 md:p-2 md:justify-between md:px-4 lg:px-8 lg:py-12 lg:transition-opacity lg:duration-300 lg:ease-out lg:transform lg:opacity-0 lg:group-hover:opacity-100 text-app-white"
        >
          <h2
            class="font-serif text-4xl font-semibold text-center text-shadow-md md:text-lg lg:text-2xl"
          >
            {{ item.name }}
          </h2>
          <p
            class="text-xl text-center text-shadow-sm xs:font-semibold md:text-sm md:font-normal lg:text-base lg:font-medium"
          >
            {{ item.description }}
          </p>
          <NuxtLink
            :to="`/shop/${item.slug}`"
            class="px-8 py-1 text-lg font-bold duration-200 border rounded-sm shadow-md lg:transition-colors md:transition-opacity xs:px-8 xs:py-2 md:text-base border-app-white bg-app-white text-app-dark-gray lg:hover:bg-opacity-0 lg:hover:text-app-white"
          >
            Shop now
          </NuxtLink>
        </figcaption>
      </figure>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    categoryList: {
      type: Array,
      default: () => {
        return [
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
        ];
      },
    },
  },
};
</script>
