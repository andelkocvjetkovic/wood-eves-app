<template>
  <main class="bg-app-white text-app-dark-gray">
    <article class="lg:max-w-4xl lg:mx-auto">
      <app-home-hero class="h-screen/75 lg:h-screen" />
      <div role="presentation" class="h-1 mt-px bg-app-dark-gray"></div>
      <p
        class="max-w-xs mx-auto mt-8 text-lg leading-snug xs:mt-8 xs:text-xl xs:max-w-sm sm:max-w-md sm:mt-12 sm:text-2xl md:max-w-xl text-app-dark-gray lg:max-w-md lg:text-base"
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
      <section class="mt-20 sm:mt-32">
        <h2
          class="max-w-xs mx-auto font-serif text-xl font-semibold tracking-wide text-center uppercase xs:max-w-sm xs:text-2xl sm:max-w-md sm:leading-8 md:max-w-2xl md:text-3xl text-app-accent"
        >
          Handgefertigte Möbel Für außergewöhnliche Häuser Lassen Sie sich von
          uns inspirieren
        </h2>
        <aside v-if="isMobile" class="relative mt-16 overflow-hidden h-96">
          <keep-alive>
            <app-horizontal-gallery />
          </keep-alive>
        </aside>
      </section>
      <section
        class="max-w-xs mx-auto mt-24 xs:max-w-sm xs:mt-32 sm:max-w-lg md:max-w-2xl md:mt-48 lg:max-w-3xl"
      >
        <h2
          class="font-serif text-2xl font-semibold text-center uppercase sm:text-4xl text-app-dark-gray md:pb-16 md:px-6"
        >
          Sehen Sie sich unsere Angebote an
        </h2>
        <div class="md:flex md:flex-wrap">
          <app-category-info
            v-for="(cat, i) in $options.categoryItems"
            :key="cat.name"
            :image-src="cat.img"
            :name="cat.name"
            :slug="cat.slug"
            class="mt-12 sm:mt-20 md:w-1/4 md:flex-grow md:flex-shrink-0 md:mt-0"
            :class="[i != 0 ? 'md:ml-1.5 lg:ml-2' : '']"
          />
        </div>
      </section>
      <app-our-work class="pb-24 mt-24 sm:mt-32 md:mt-36" />
    </article>
  </main>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },
  computed: {
    isMobile() {
      return !this.$device?.tablet;
    },
  },
  categoryItems: [
    {
      name: "Tish",
      img: "home-stol-2.jpg",
      slug: "tish",
    },
    {
      name: "Stühle",
      img: "home-stolica-3.jpg",
      slug: "stuhle",
    },
    {
      name: "Accessoires",
      img: "home-ostalo-1.jpg",
      slug: "accessoires",
    },
  ],
};
</script>
