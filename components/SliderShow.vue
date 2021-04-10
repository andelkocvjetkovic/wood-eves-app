<template>
  <ClientOnly>
    <Swiper ref="swiper" class="swiper" :options="$options.swiperOption">
      <SwiperSlide v-for="(img, i) in images" :key="i">
        <div class="swiper-zoom-container">
          <NuxtImg
            class="object-cover object-center w-full h-full min-w-full"
            :alt="img"
            sizes="xs:640px"
            :src="img"
          />
        </div>
      </SwiperSlide>
      <div
        slot="pagination"
        class="swiper-pagination swiper-pagination-black"
      ></div>
      <div
        slot="button-prev"
        class="swiper-button-prev swiper-button-black"
      ></div>
      <div
        slot="button-next"
        class="swiper-button-next swiper-button-black"
      ></div>
    </Swiper>
  </ClientOnly>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  swiperOption: {
    a11y: true,
    zoom: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  },
  watch: {
    images() {
      this.$refs.swiper.$swiper.slideToLoop(0, 1000, false);
    },
  },
};
</script>

<style>
/** Style for swiper component being globaly  imported in ~/layout/defalt */
</style>
