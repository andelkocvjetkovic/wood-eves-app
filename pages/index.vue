<template>
  <main class="bg-app-white text-app-dark-gray">
    <!--Home Hero background and text with apper animation -->
    <article class="lg:max-w-4xl lg:mx-auto xl:max-w-5xl">
      <section
        class="masthead h-screen/75"
        role="img"
        aria-label="Image Description"
      >
        <transition appear :css="false" @appear="apperAnimationHomeText">
          <h1
            class="max-w-sm px-2 mx-auto mt-12 font-serif text-3xl font-semibold text-center text-app-white sm:text-4xl sm:max-w-md md:max-w-2xl md:mt-20"
          >
            Die Seele des Holzes Mehr als nur Möbel...
          </h1>
        </transition>
      </section>
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
        <!-- The Gallery -->
        <h2
          class="max-w-xs mx-auto font-serif text-xl font-semibold tracking-wide text-center uppercase xs:max-w-sm xs:text-2xl sm:max-w-md sm:leading-8 md:max-w-2xl md:text-3xl text-app-accent"
        >
          Handgefertigte Möbel Für außergewöhnliche Häuser Lassen Sie sich von
          uns inspirieren
        </h2>
        <ClientOnly>
          <aside v-if="isMobile" class="relative mt-16 overflow-hidden">
            <h3 class="p-2 font-serif italic font-semibold">Gallery</h3>
            <KeepAlive>
              <SpliderShowHorizontal />
            </KeepAlive>
          </aside>
          <GridGallery
            v-else
            class="mt-12 md:max-w-2xl md:mx-auto lg:max-w-4xl xl:max-w-5xl"
          />
        </ClientOnly>
      </section>
      <section
        class="max-w-xs mx-auto mt-24 xs:max-w-sm xs:mt-32 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
      >
        <!-- The links to shops -->
        <h2
          class="font-serif text-2xl font-semibold text-center uppercase sm:text-4xl text-app-dark-gray md:pb-16 md:px-6"
        >
          Sehen Sie sich unsere Angebote an
        </h2>
        <ShopCategoriesLinks class="md:flex md:flex-wrap" />
      </section>
      <OurWork class="py-12 mt-24 sm:mt-32 md:mt-36 lg:py-20" />
    </article>
  </main>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
          async: true,
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return !this.$device?.tablet;
    },
  },
  methods: {
    apperAnimationHomeText(el, done) {
      this.$gsap.from(el, {
        y: 100,
        opacity: 0,
        duration: 1,
        onComplete: done,
      });
    },
  },
};
</script>
<style scoped>
.masthead {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  overflow: hidden;
  background-size: cover !important;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 26%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url("/home-bg-2.jpg") no-repeat center center scroll;
}
h1 {
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
}
</style>
