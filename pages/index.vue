<template>
  <main class="bg-app-white text-app-dark-gray">
    <article class="">
      <app-home-hero class="h-screen/75 md:h-screen" />

      <p
        class="max-w-xs mx-auto mt-8 text-lg leading-snug xs:mt-8 xs:text-xl xs:max-w-sm sm:max-w-md md:max-w-xl text-app-dark-gray"
      >
        In ganz Bosnien und Herzegowina gibt es Wälder, die an das Tolkins
        Nandor erinnern, in dem Waldelben leben. Waldelben spüren die Seele der
        Bäume sowie unser kleines Team von Holzzauberer. Nur so können wir die
        jenige beschreiben die Verantwortlich sind für die fantastische
        Kombination von Holz mit anderen Materialien und einen Sinn für Design
        besitzen, der unserem Zuhause Wärme und ein magisches Aussehen verleiht.
      </p>
    </article>
    <article class="">
      <section class="mt-20">
        <h2
          class="max-w-xs mx-auto text-xl font-semibold tracking-wide text-center uppercase xs:max-w-sm xs:text-2xl sm:text-3xl md:max-w-2xl text-app-accent"
        >
          Handgefertigte Möbel Für außergewöhnliche Häuser Lassen Sie sich von
          uns inspirieren
        </h2>
        <aside class="h-auto mt-16">
          <h3
            class="max-w-xs mx-auto text-base tracking-wide underline xs:max-w-sm text-app-dark-gray"
          >
            Galerie ansehen
          </h3>
          <app-horizontal-gallery />
        </aside>
      </section>
      <section
        class="max-w-xs mx-auto mt-24 xs:max-w-sm xs:mt-32 sm:max-w-lg md:flex md:flex-wrap"
      >
        <h2
          class="text-4xl font-semibold text-center uppercase sm:text-3xl md:text-4xl text-app-accent"
        >
          Sehen Sie sich unsere Angebote an
        </h2>
        <app-category-info
          v-for="cat in $options.categoryItems"
          :key="cat.name"
          :image-src="cat.img"
          :name="cat.name"
          class=""
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
