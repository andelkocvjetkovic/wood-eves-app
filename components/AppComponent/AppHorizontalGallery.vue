<template>
  <splide :options="optionsSplide">
    <splide-slide v-for="item in $options.arrayItems" :key="item.img">
      <img :data-splide-lazy="item.img" :alt="item.alt" />
    </splide-slide>
  </splide>
</template>

<script>
export default {
  arrayItems: [
    {
      alt: "Bernard-1 Stuhl",
      img: "/articles/bernard-stolica-smeda-1.jpg",
    },
    {
      alt: "Bernard-2 Stuhl",
      img: "/articles/bernard-stolica-zuta-1.jpg",
    },
    {
      alt: "Dobby-1 Stuhl",
      img: "/articles/dobby-stolica-1.jpg",
    },
    {
      alt: "Cloud-1 Stuhl",
      img: "/articles/cloud-stolica-1.jpg",
    },
    {
      alt: "Phone Holder-1 brown",
      img: "/articles/holder-phone-smedi-1.jpg",
    },
    {
      alt: "Phone Holder-1 yellow",
      img: "/articles/holder-phone-zuti-1.jpg",
    },
    {
      alt: "Jinx-1 Stuhl",
      img: "/articles/jinx-barska-stolica-1.jpg",
    },
    {
      alt: "Judy-1 Stuhl",
      img: "/articles/juddy-stolica-1.jpg",
    },
    {
      alt: "Leaf-1 Tish",
      img: "/articles/leaf-stol-1.jpg",
    },
    {
      alt: "Nova-1 Tish",
      img: "/articles/nova-stol-1.jpg",
    },
    {
      alt: "Flupy-1 Schneidbrett",
      img: "/articles/flupy-daska-1.jpg",
    },
    {
      alt: "Pegas-1 Stuhl",
      img: "/articles/pegas-stolica-1.jpg",
    },
    {
      alt: "Freeze-1 Schneidbrett",
      img: "/articles/freeze-daska-1.jpg",
    },
    {
      alt: "Rock-1 Stuhl",
      img: "/articles/rock-stolica-1.jpg",
    },
    {
      alt: "Rose-1 Stuhl",
      img: "/articles/rose-stolica-1.jpg",
    },
    {
      alt: "Australia Schneidbrett",
      img: "/articles/australia-daska-1.jpg",
    },
    {
      alt: "Sound-1 Tish",
      img: "/articles/sound-stol-1.jpg",
    },
    {
      alt: "Way-1 Tish",
      img: "/articles/way-stol-1.jpg",
    },
    {
      alt: "Long-1 Schneidbrett",
      img: "/articles/long-daska-1.jpg",
    },
  ],
  data() {
    return {
      optionsSplide: {
        type: "loop",
        cover: true,
        arrows: false,
        pagination: false,
        preloadPages: 1,
        lazyLoad: "nearby",
        width: "100vw",
        fixedHeight: "24rem",
        breakpoints: {
          768: {
            gap: "1rem",
            perPage: 1.8,
          },
          640: {
            gap: "0.7rem",
            perPage: 1.4,
          },
          475: {
            gap: "0.5rem",
            perPage: 1.2,
          },
        },
      },
    };
  },
};
</script>
