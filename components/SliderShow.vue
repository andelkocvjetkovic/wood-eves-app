<template>
  <ClientOnly>
    <Swiper ref="swiper" class="swiper" :options="$options.swiperOption">
      <SwiperSlide v-for="(img, i) in images" :key="i">
        <div class="swiper-zoom-container">
          <div class="relative w-full overflow-hidden pb-full">
            <NuxtImg
              class="absolute inset-0 object-cover object-center w-full h-full"
              :alt="img"
              sizes="xs:640px sm:840px"
              :src="img"
              quality="80"
              fit="contain"
            />
          </div>
        </div>
      </SwiperSlide>
      <div
        slot="pagination"
        class="swiper-pagination swiper-pagination-black"
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
    zoom: true,
    a11y: true,
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
