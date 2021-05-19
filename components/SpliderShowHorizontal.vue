<template>
  <section>
    <h3 class="px-4 py-2 font-serif italic font-semibold">Gallery</h3>

    <aside>
      <VueSlickCarousel v-bind="$options.slickOptions">
        <figure v-for="item in $options.arrayItems" :key="item.img" class="p-2">
          <div
            role="presentation"
            class="relative overflow-hidden bg-white pb-full"
          >
            <NuxtImg
              :src="item.img"
              :alt="item.alt"
              class="absolute inset-0 object-cover object-center w-full h-full"
              sizes="xs:100vw sm:70vw"
              quality="80"
              loading="lazy"
            />
          </div>
          <figcaption class="sr-only">{{ item.alt }}</figcaption>
        </figure>
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
  ],
  slickOptions: {
    arrows: false,
    dots: false,
    accessibility: true,
    edgeFriction: 0.5,
    slidesToScroll: 1,
    infinite: false,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          focusOnSelect: true,
        },
      },
    ],
  },
};
</script>
