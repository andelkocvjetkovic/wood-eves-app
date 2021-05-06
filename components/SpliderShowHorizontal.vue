<template>
  <Swiper class="swiper" :options="$options.swiperOption">
    <SwiperSlide v-for="item in $options.arrayItems" :key="item.img">
      <div class="relative overflow-hidden pb-full">
        <img
          :data-src="item.img"
          :alt="item.alt"
          class="absolute inset-0 object-cover object-center w-full h-full swiper-lazy"
        />
        <div class="absolute inset-0 w-full min-h-full">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
export default {
  arrayItems: [
    {
      alt: "Bernard Chair Walnuss",
      img: "/articles/bernard/bernard_walnus_1.jpg",
    },
    {
      alt: "Bernard Chair Oak",
      img: "/articles/bernard/bernard_oak_1.jpg",
    },
    {
      alt: "Bein Wall Clock",
      img: "/articles/bein/bein_bijela_pozadina.jpg",
    },
    {
      alt: "Darfin Wall Light",
      img: "/articles/darfin/darfin_bg_white.jpg",
    },
    {
      alt: "Jinx Chair Oak",
      img: "/articles/jinx/jinx_oak_1.jpg",
    },
    {
      alt: "Judy Chair Walnuss",
      img: "/articles/judy/judy_walnus_1.jpg",
    },
    {
      alt: "Lakar Wall Clock",
      img: "/articles/lakar/alkar_bijela_pozadina.jpg",
    },
    {
      alt: "Mabung Cutting Board",
      img: "/articles/mabung/mabung_bg_white.jpg",
    },
    {
      alt: "Pegas Chair Wallnus",
      img: "/articles/pegas/pegas_walnus_1.jpg",
    },
    {
      alt: "Rock Chair Black Walnuss",
      img: "/articles/rock/rock_black_1.jpg",
    },
    {
      alt: "Rock Chair Walnuss",
      img: "/articles/rock/rock_walnus_1.jpg",
    },
    {
      alt: "Rose Chair Oak",
      img: "/articles/rose/rose_oak_1.jpg",
    },
    {
      alt: "Rose Chair Walnuss",
      img: "/articles/rose/rose_walnus_padded_1.jpg",
    },
    {
      alt: "Shyina Cutting Board",
      img: "/articles/shyina/shalna_1_bg_white.jpg",
    },
    {
      alt: "Tenya Wall Light",
      img: "/articles/tenya/taenya_bg_white.jpg",
    },
  ],
  swiperOption: {
    watchSlidesVisibility: true,
    preloadImages: false,
    slidesPerView: 2,
    lazy: {
      enabled: true,
      loadPrevNext: true,
      loadPrevNextAmount: 3,
    },
    a11y: {
      containerMessage: "This is our gallery",
    },
    breakpoints: {
      640: {
        slidesPerView: 2.2,
        spaceBetween: 15,
      },
      475: {
        slidesPerView: 1.6,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
    },
  },
};
</script>
