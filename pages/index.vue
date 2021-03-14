<template>
  <main class="bg-app-white text-app-dark-gray">
    <article class="lg:max-w-4xl lg:mx-auto xl:max-w-5xl">
      <app-home-hero class="h-screen/75" />
      <div
        role="presentation"
        class="h-1 mt-px bg-app-dark-gray lg:hidden"
      ></div>
      <p
        class="max-w-xs mx-auto mt-8 text-lg leading-snug xs:mt-8 xs:text-xl xs:max-w-sm sm:max-w-md sm:mt-12 md:max-w-xl md:text-center text-app-dark-gray lg:max-w-md lg:text-base"
      >
        In ganz Bosnien und Herzegowina gibt es Wälder, die an das Tolkins
        Nandor erinnern, in dem Waldelben leben. Waldelben spüren die Seele der
        Bäume sowie unser kleines Team von Holzzauberer. Nur so können wir die
        jenige beschreiben die Verantwortlich sind für die fantastische
        Kombination von Holz mit anderen Materialien und einen Sinn für Design
        besitzen, der unserem Zuhause Wärme und ein magisches Aussehen verleiht.
      </p>
    </article>
    <article>
      <section class="mt-20 sm:mt-32">
        <h2
          class="max-w-xs mx-auto font-serif text-xl font-semibold tracking-wide text-center uppercase xs:max-w-sm xs:text-2xl sm:max-w-md sm:leading-8 md:max-w-2xl md:text-3xl text-app-accent"
        >
          Handgefertigte Möbel Für außergewöhnliche Häuser Lassen Sie sich von
          uns inspirieren
        </h2>
        <client-only>
          <aside v-if="isMobile" class="relative mt-16 overflow-hidden">
            <h3 class="p-2 font-serif italic font-semibold">Gallery</h3>
            <keep-alive>
              <app-horizontal-gallery />
            </keep-alive>
          </aside>
        </client-only>
      </section>
      <section
        class="max-w-xs mx-auto mt-24 xs:max-w-sm xs:mt-32 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
      >
        <h2
          class="font-serif text-2xl font-semibold text-center uppercase sm:text-4xl text-app-dark-gray md:pb-16 md:px-6"
        >
          Sehen Sie sich unsere Angebote an
        </h2>
        <app-category-info class="md:flex md:flex-wrap" />
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
};
</script>
