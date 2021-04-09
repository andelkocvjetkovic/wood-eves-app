<template>
  <ClientOnly>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(img, i) in images" :key="i">
        <NuxtImg
          class="object-cover object-center w-full h-full min-w-full"
          :src="img"
        />
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
    </swiper>
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
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
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
    };
  },
};
</script>

<style>
/** Style for swiper component being globaly  imported in ~/layout/defalt */
</style>
