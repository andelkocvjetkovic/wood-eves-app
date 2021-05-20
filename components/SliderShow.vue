<template>
  <VueSlickCarousel v-bind="$options.slickOptions" :key="images[0]">
    <figure v-for="(img, i) in images" :key="i">
      <div role="presentation" class="relative w-full overflow-hidden pb-full">
        <NuxtImg
          class="absolute inset-0 object-cover object-center w-full h-full"
          :alt="img"
          sizes="xs:100vw sm:70vw md:60vw lg:70vw"
          :src="img"
          quality="80"
          fit="cover"
        />
      </div>
    </figure>
  </VueSlickCarousel>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  slickOptions: {
    accessibility: true,
    dots: true,
    infinite: true,
    dotsClass: "slick-dots",
    speed: 300,
    draggable: false,
    touchThreshold: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    touchMove: true,
  },
};
</script>
