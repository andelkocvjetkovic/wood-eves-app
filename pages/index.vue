<template>
  <main class="font-sans bg-app-white text-app-dark-gray">
    <app-home-hero />
    <article
      class="max-w-xs mx-auto mt-12 xs:max-w-sm sm:max-w-md md:mt-16"
    >
      <p
        class="text-app-dark-gray font-sans text-lg leading-snug xs:text-xl sm:text-2xl"
      >
        In ganz Bosnien und Herzegowina gibt es Wälder, die an das
        Tolkins Nandor erinnern, in dem Waldelben leben. Waldelben
        spüren die Seele der Bäume sowie unser kleines Team von
        Holzzauberer. Nur so können wir die jenige beschreiben die
        Verantwortlich sind für die fantastische Kombination von Holz
        mit anderen Materialien und einen Sinn für Design besitzen,
        der unserem Zuhause Wärme und ein magisches Aussehen verleiht.
      </p>
    </article>
    <article class="py-24">
      <h2
        class="uppercase text-xl text-center py-6 font-semibold text-app-accent xs:text-2xl xs:max-w-sm xs:mx-auto sm:py-12 sm:text-3xl md:max-w-xl"
      >
        Handgefertigte Möbel Für außergewöhnliche Häuser Lassen Sie
        sich von uns inspirieren
      </h2>
      <section class="h-auto">
        <client-only>
          <splide :options="options">
            <splide-slide
              v-for="item in $options.slideGallery"
              :key="item.img"
            >
              <img
                :data-splide-lazy="item.img"
                :alt="item.alt"
                class="w-full h-full"
              />
            </splide-slide>
          </splide>
        </client-only>
      </section>
      <section
        class="mt-36 xs:mt-40 sm:mt-48 max-w-xs mx-auto xs:max-w-sm sm:max-w-lg md:max-w-3xl md:flex md:flex-wrap md:px-3 lg:max-w-4xl xl:max-w-6xl"
      >
        <h2
          class="uppercase text-2xl text-center py-4 font-semibold text-app-accent xs:text-2xl sm:text-3xl md:w-full md:py-12"
        >
          Sehen Sie sich unsere Angebote an
        </h2>
        <app-category-info
          v-for="cat in $options.categoryItems"
          :key="cat.name"
          :image-src="cat.img"
          :name="cat.name"
          class="w-full h-full mt-8 sm:mt-12 md:mt-0 md:w-1/3 md:h-96 flex-grow-1 flex-shrink-0 px-1 lg:px-3 xl:px-5 xl:h-screen2/3"
        />
      </section>
    </article>
  </main>
</template>

<script>
export default {
  slideGallery: [
    {
      alt: "Bernard",
      img: "/articles/bernard-stolica.jpg",
    },
    {
      alt: "Barhocker",
      img: "/articles/barska-stolica.jpg",
    },
    {
      alt: "Tish",
      img: "/articles/stol-1.jpg",
    },
    {
      alt: "Tischuhr",
      img: "/articles/sat-1.jpg",
    },
    {
      alt: "Tish",
      img: "/articles/stolica-bijela.jpg",
    },
  ],
  categoryItems: [
    {
      name: "Tish",
      img: "stol2.jpeg",
    },
    {
      name: "Stühle",
      img: "buddy.jpg",
    },
    {
      name: "Accessoires",
      img: "home-bg-3.jpg",
    },
  ],
  data() {
    return {
      options: {
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
            height: "45vh",
            perPage: 1.3,
          },
          640: {
            height: "40vh",
            perPage: 1.2,
          },
          570: {
            height: "40vh",
          },
          475: {
            height: "50vh",
            perPage: 1.2,
          },
        },
      },
    };
  },
};
</script>
<style lang="postcss" scoped></style>
