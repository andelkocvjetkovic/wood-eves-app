<template>
  <aside class="rounded-lg overflow-hidden shadow-sm bg-transparent">
    <figure
      class="group relative min-w-full min-h-full overflow-hidden"
    >
      <app-image
        class="pb-4/5 sm:pb-3/5 md:pb-0 md:min-w-full md:min-h-full md:static"
      >
        <img
          :src="imageSrc"
          alt="some alt"
          class="absolute inset-0 w-full h-full object-cover object-right transform transition-transform ease-out duration-200 lg:group-hover:scale-110"
        />
      </app-image>
      <figcaption
        class="absolute inset-0 w-full h-full text-app-white flex flex-col items-center justify-around bg-black bg-opacity-60 transform lg:opacity-0 transition-opacity duration-300 group-hover:opacity-100 ease-out"
      >
        <h2
          class="text-center font-serif text-2xl font-semibold xs:text-4xl"
        >
          {{ name }}
        </h2>
        <p class="text-center xs:text-lg md:px-1">
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
