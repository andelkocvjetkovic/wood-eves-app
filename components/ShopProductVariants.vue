<template>
  <figure class="md:grid md:grid-rows-1 md:grid-cols-2 md:gap-x-4 lg:gap-x-8">
    <!-- container -->
    <h2 class="mt-6 text-3xl font-semibold lg:text-4xl md:hidden">
      {{ item.name }}
    </h2>
    <div
      class="md:order-last md:flex md:flex-col md:justify-center md:items-center"
    >
      <SliderShow v-if="isMobile" class="w-full mt-6 t" :images="getImgs" />
      <ThumbsGallery v-else :images="getImgs" />
    </div>

    <figcaption
      class="flex flex-col items-center justify-center mt-6 space-y-5 lg:justify-around lg:space-y-0"
    >
      <h2
        class="hidden mt-6 text-3xl font-semibold lg:text-4xl md:block md:w-full"
      >
        {{ item.name }}
      </h2>
      <div class="flex flex-col items-start w-full space-y-2">
        <fieldset>
          <legend>Choose a type of wood</legend>
          <p v-for="wood in item.variants" :key="wood.type">
            <input
              :id="wood.type"
              v-model="type"
              type="radio"
              :name="wood.type"
              :value="wood.type"
            />
            <label :for="wood.type" class="capitalize">{{ wood.type }}</label>
          </p>
        </fieldset>

        <p class="text-xl font-semibold underline lg:text-2xl">
          {{ getEuro(item.price) }}
        </p>
      </div>
      <p class="prose-sm prose md:pr-4">{{ item.description }}</p>
      <button
        type="button"
        class="self-start px-6 py-2 text-lg rounded shadow lg:font-semibold bg-app-dark-gray text-app-white"
      >
        Add to card
      </button>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      type: this.item.variants[0].type,
      currentImageIndex: 0,
    };
  },
  computed: {
    isMobile() {
      return !this.$device?.tablet;
    },

    getSlug() {
      return `/articles/${this.item.slug}`;
    },
    getImgs() {
      var selectedItem = this.item.variants.find(
        (item) => item.type === this.type
      );
      return selectedItem.imgs.map((img) => {
        return `${this.getSlug}/${img}`;
      });
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
