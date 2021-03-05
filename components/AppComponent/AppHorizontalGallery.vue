<template>
  <div class="mt-6">
    <client-only>
      <splide :options="optionsSplide">
        <splide-slide v-for="item in $options.arrayItems" :key="item.img">
          <img
            :data-splide-lazy="item.img"
            :alt="item.alt"
            class="w-full h-full"
          />
        </splide-slide>
      </splide>
    </client-only>
  </div>
</template>

<script>
export default {
  arrayItems: [
    {
      alt: "Bernard",
      img: "/articles/bernard-stolica-1.jpg",
    },
    {
      alt: "Barhocker",
      img: "/articles/jinx-barska-stolica.jpg",
    },
    {
      alt: "Tish",
      img: "/articles/xx-stolica.jpg",
    },
    {
      alt: "Tischuhr",
      img: "/articles/loop-sat-2.jpg",
    },
    {
      alt: "Tish",
      img: "/articles/winx-stol-1.jpeg",
    },
  ],
  data() {
    return {
      optionsSplide: {
        cover: true,
        rewind: true,
        type: "loop",
        perPage: 3.5,
        arrows: false,
        pagination: false,
        preloadPages: 1,
        gap: "1rem",
        height: "35vh",
        lazyLoad: "nearby",
        width: "100vw",
        breakpoints: {
          1024: {
            perPage: 2.5,
          },
          768: {
            height: "50vh",
            gap: "1rem",
            perPage: 1.3,
          },
          640: {
            height: "40vh",
            gap: "10px",
          },
          570: {
            height: "45vh",
            gap: "8px",
          },
          475: {
            height: "50vh",
            gap: "6px",
            perPage: 1.2,
          },
        },
      },
    };
  },
};
</script>
