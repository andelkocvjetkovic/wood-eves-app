<template>
  <aside class="rounded-md overflow-hidden shadow-lg bg-transparent">
    <figure
      class="group relative min-w-full min-h-full rounded-sm overflow-hidden"
    >
      <app-image
        class="pb-4/5 sm:pb-3/5 md:pb-0 md:min-w-full md:min-h-full md:static"
      >
        <img
          :src="imageSrc"
          alt="some alt"
          class="absolute inset-0 w-full h-full object-cover object-right"
        />
      </app-image>
      <figcaption
        class="absolute inset-0 w-full h-full text-app-white flex flex-col items-center justify-around bg-black bg-opacity-60 transform lg:opacity-0 transition-opacity duration-200 group-hover:opacity-100 ease-out"
      >
        <h2
          class="text-center font-serif text-2xl font-semibold xs:text-4xl"
        >
          {{ name }}
        </h2>
        <p class="text-center xs:text-lg">
          {{ description }}
        </p>
        <button
          type="button"
          class="focus:outline-none bg-app-accent px-6 py-1 rounded-sm text-lg font-semibold"
        >
          Sehen
        </button>
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
  },
};
</script>
