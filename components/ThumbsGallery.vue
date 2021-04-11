<template>
  <ClientOnly>
    <div class="w-full h-96">
      <!-- swiper1 -->
      <swiper
        ref="swiperTop"
        class="w-full swiper h-5/6"
        :options="swiperOptionTop"
      >
        <swiper-slide v-for="(img, i) in images" :key="i">
          <NuxtImg
            :src="img"
            :alt="img"
            sizes="md:860px lg:1024px"
            class="object-cover object-center w-full h-full min-w-full"
          />
        </swiper-slide>
        <div
          slot="button-next"
          class="swiper-button-next swiper-button-black"
        ></div>
        <div
          slot="button-prev"
          class="swiper-button-prev swiper-button-black"
        ></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper
        ref="swiperThumbs"
        class="swiper h-1/6 gallery-thumbs"
        :options="swiperOptionThumbs"
      >
        <swiper-slide v-for="(img, i) in images" :key="i" class="opacity-40">
          <NuxtImg
            :src="img"
            :alt="img"
            sizes="xs:56px"
            class="object-scale-down object-center w-full h-full cursor-pointer"
          />
        </swiper-slide>
      </swiper>
    </div>
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
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style scoped>
.gallery-thumbs .swiper-slide {
  width: 56px !important;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1 !important;
}
</style>
