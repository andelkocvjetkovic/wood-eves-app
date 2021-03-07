<template>
  <div class="mt-6">
    <client-only>
      <splide :options="optionsSplide">
        <splide-slide v-for="item in $options.arrayItems" :key="item.img">
          <img :data-splide-lazy="item.img" :alt="item.alt" />
        </splide-slide>
      </splide>
    </client-only>
  </div>
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
      alt: "Pegas-1 Stuhl",
      img: "/articles/pegas-stolica-1.jpg",
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
      alt: "Sound-1 Tish",
      img: "/articles/sound-stol-1.jpg",
    },
    {
      alt: "Way-1 Tish",
      img: "/articles/way-stol-1.jpg",
    },
  ],
  data() {
    return {
      optionsSplide: {
        rewind: true,
        type: "loop",
        perPage: 3.5,
        arrows: false,
        pagination: false,
        preloadPages: 1,
        gap: "1rem",
        height: "450px",
        lazyLoad: "nearby",
        width: "100vw",
        breakpoints: {
          1024: {
            perPage: 2.5,
          },
          768: {
            height: "600px",
            gap: "1rem",
            perPage: 1.5,
          },
          640: {
            height: "500px",
            perPage: 1.4,
            gap: "10px",
          },
          570: {
            height: "450px",
            perPage: 1.3,
            gap: "8px",
          },
          475: {
            height: "400px",
            gap: "6px",
            perPage: 1.2,
          },
        },
      },
    };
  },
};
</script>
