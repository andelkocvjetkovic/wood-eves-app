<template>
  <section>
    <h3 class="px-4 py-2 font-serif italic font-semibold">Gallery</h3>
    <aside>
      <VueSlickCarousel v-bind="settings" @init="initHandler">
        <div v-for="item in $options.arrayItems" :key="item.img" class="p-1">
          <div
            role="presentation"
            class="relative overflow-hidden bg-white pb-full"
          >
            <NuxtImg
              :src="item.img"
              :alt="item.alt"
              class="absolute inset-0 object-cover object-center w-full h-full"
              sizes="xs:100vw sm:100vw md:33vw lg:33vw xl:33vw"
              quality="80"
              loading="lazy"
            />
          </div>
        </div>
      </VueSlickCarousel>
    </aside>
  </section>
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
      alt: "Pegas Chair Wallnus",
      img: "/articles/pegas/pegas_walnus_1.jpg",
    },
    {
      alt: "Rock Chair Black Walnuss",
      img: "/articles/rock/rock_black_2.jpg",
    },
    {
      alt: "Rock Chair Walnuss",
      img: "/articles/rock/rock_walnus_3.jpg",
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
    {
      alt: "XX Chair Oak",
      img: "/articles/xx/xx_1.jpg",
    },
  ],

  data() {
    return {
      settings: {
        arrows: true,
        accessibility: true,
        slidesToScroll: 1,
        touchThreshold: 10,
        draggable: false,
        slidesToShow: 1,
        infinite: false,
        responsive: [],

        speed: 600,
      },
      responsiveSettings: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 475,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1,
          },
        },
      ],
      responsiveAplied: false,
    };
  },
  methods: {
    initHandler() {
      if (this.responsiveAplied == false) {
        this.applyResponsiveSettings();
      }
    },
    applyResponsiveSettings() {
      this.settings.responsive = this.responsiveSettings;
      this.settings.slidesToShow = 3;
      this.settings.slidesToScroll = 2;
      this.responsiveAplied = true;
    },
  },
};
</script>
