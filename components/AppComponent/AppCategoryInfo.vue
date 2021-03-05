<template functional>
  <aside class="mt-12 overflow-hidden rounded-sm shadow-md">
    <client-only>
      <figure class="relative group">
        <app-image class="pb-full">
          <img
            :src="props.imageSrc"
            :alt="props.name"
            class="absolute inset-0 object-cover object-right w-full h-full transition-transform duration-200 lg:ease-out lg:transform lg:group-hover:scale-110"
          />
        </app-image>
        <figcaption
          class="absolute inset-0 flex flex-col items-center justify-around w-full h-full bg-black lg:transition-opacity lg:duration-300 lg:ease-out lg:transform lg:opacity-0 lg:group-hover:opacity-100 text-app-white bg-opacity-60"
        >
          <h2 class="font-serif text-3xl font-semibold text-center xs:text-4xl">
            {{ props.name }}
          </h2>
          <p class="px-2 text-center xs:text-lg xs:px-4">
            {{ props.description }}
          </p>
          <nuxt-link
            :to="props.slug"
            class="px-6 py-1 text-lg font-semibold rounded-sm xs:px-10 xs:py-2 bg-app-accent"
          >
            Sehen
          </nuxt-link>
        </figcaption>
      </figure>
    </client-only>
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
