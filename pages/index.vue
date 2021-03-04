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
        class="uppercase text-xl text-center py-6 font-semibold text-app-accent xs:text-2xl xs:max-w-sm xs:mx-auto sm:py-12 sm:text-3xl"
      >
        Handgefertigte Möbel Für außergewöhnliche Häuser Lassen Sie
        sich von uns inspirieren
      </h2>
      <section class="px-3 sm:max-w-lg sm:mx-auto">
        <app-image
          v-for="item in $options.coverArticle"
          :key="item.alt"
          class="mt-4 md:mt-6 pb-full xs:pb-3/4"
        >
          <img
            :src="item.img"
            :alt="item.alt"
            class="absolute inset-0 w-full h-full object-cover object-center"
          />
        </app-image>
      </section>
      <section
        class="mt-36 xs:mt-40 sm:mt-48 max-w-xs mx-auto xs:max-w-sm sm:max-w-lg md:max-w-3xl md:flex md:flex-wrap md:px-6"
      >
        <h2
          class="uppercase text-2xl text-center py-4 font-semibold text-app-accent xs:text-2xl sm:text-3xl md:w-full md:py-12"
        >
          Sehen Sie sich unsere Angebote an
        </h2>
        <app-category-info
          v-for="(cat, i) in $options.categoryItems"
          :key="cat.name"
          :image-src="cat.img"
          :name="cat.name"
          class="w-full h-full mt-8 sm:mt-12 md:mt-0 md:w-1/3 md:h-96 flex-grow-1 flex-shrink-0"
          :class="[i > 0 ? '' : '']"
        />
      </section>
    </article>
  </main>
</template>

<script>
export default {
  coverArticle: [
    {
      alt: "Tischuhr ",
      img: "/articles/sat-2.jpg",
    },
    {
      alt: "Tische Buddy",
      img: "/articles/xx-stolica.jpg",
    },
    {
      alt: "Tische budy-stolica",
      img: "/articles/buddy-stolica.jpg",
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
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
