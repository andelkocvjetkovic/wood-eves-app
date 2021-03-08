<template>
  <aside
    class="overflow-hidden rounded-sm shadow-md md:h-screen/75 md:relative"
  >
    <figure class="relative group md:absolute md:inset-0">
      <app-image class="pb-full sm:pb-2/3 md:pb-0 md:h-full">
        <img
          :src="imageSrc"
          :alt="name"
          class="absolute inset-0 object-cover object-right w-full h-full transition-transform duration-200 lg:ease-out lg:transform lg:group-hover:scale-110"
        />
      </app-image>
      <figcaption
        class="absolute inset-0 flex flex-col items-center justify-around w-full h-full bg-black bg-opacity-50 lg:transition-opacity lg:duration-300 lg:ease-out lg:transform lg:opacity-0 lg:group-hover:opacity-100 text-app-white"
      >
        <h2
          class="font-serif text-3xl font-semibold text-center xs:text-4xl md:text-3xl"
        >
          {{ name }}
        </h2>
        <p
          class="px-2 text-center xs:text-lg xs:px-4 sm:text-xl sm:px-6 md:px-3 md:text-lg"
        >
          {{ description }}
        </p>
        <nuxt-link
          :to="`/shop/${slug}`"
          class="px-6 py-1 text-lg font-semibold duration-200 border rounded-sm shadow-md lg:transition-colors lg:transition-opacity xs:px-10 xs:py-2 sm:text-xl sm:px-12 sm:py-3 md:text-base border-app-white bg-app-white text-app-dark-gray lg:hover:bg-opacity-0 lg:hover:text-app-white"
        >
          Sehen
        </nuxt-link>
      </figcaption>
    </figure>
  </aside>
</template>
<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Natus quaerat sint hic! Ipsam at distinctio qui debitis
          consequatur minima.`,
    },
    slug: {
      type: String,
      default: "/",
    },
  },
};
</script>
