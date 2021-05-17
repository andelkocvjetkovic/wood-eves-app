<template>
  <div class="flex flex-col">
    <div class="">
      <VueSlickCarousel
        ref="for"
        v-bind="sliderFor"
        :key="images[0]"
        class="slider-for"
      >
        <div
          v-for="(img, i) in images"
          :key="i"
          role="presentation"
          class="relative w-full overflow-hidden pb-full"
        >
          <NuxtImg
            class="absolute inset-0 object-cover object-center w-full h-full"
            :alt="img"
            sizes="xs:100vw sm:70vw md:60vw"
            :src="img"
            quality="80"
            fit="cover"
          />
        </div>
      </VueSlickCarousel>
    </div>
    <div class="">
      <VueSlickCarousel
        ref="nav"
        v-bind="sliderNav"
        :key="images[0]"
        class="slider-for"
      >
        <div v-for="(img, i) in images" :key="i" role="presentation">
          <NuxtImg :src="img" alt="img" sizes="md:20vw" />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      sliderFor: {
        dots: false,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        fade: true,
        asNavFor: ".slider-nav",
      },
      sliderNav: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        asNavFor: ".slider-for",
        centerMode: true,
      },
    };
  },
};
</script>

<style></style>
