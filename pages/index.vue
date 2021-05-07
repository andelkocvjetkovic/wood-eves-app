<template>
  <main class="bg-app-white text-app-dark-gray">
    <!--Home Hero background and text with apper animation -->
    <article class="lg:max-w-4xl lg:mx-auto xl:max-w-5xl">
      <section class="masthead h-screen/75vh" aria-label="Image Description">
        <h1
          class="max-w-sm px-2 mx-auto mt-12 font-serif text-3xl font-semibold text-center text-app-white sm:text-4xl sm:max-w-md md:max-w-2xl md:mt-20"
        >
          The soul of wood.
          <br />
          More than just furniture...
        </h1>
      </section>
      <div
        role="presentation"
        class="h-1 mt-px bg-app-dark-gray lg:hidden"
      ></div>
      <p
        class="max-w-xs mx-auto mt-8 text-lg leading-snug xs:mt-8 xs:text-xl xs:max-w-sm sm:max-w-md sm:mt-12 md:max-w-xl md:text-center text-app-dark-gray lg:max-w-md lg:text-base"
      >
        Fugar plum gummi bears biscuit. Wafer biscuit marzipan cookie icing
        sesame snaps marzipan. Marshmallow sweet jelly-o pudding bear claw
        gummies. Powder chocolate cake tiramisu topping macaroon tart pudding
        fruitcake. Pie oat cake fruitcake oat cake. Gummi bears soufflé chupa
        chups sugar plum danish cupcake cheesecake.
      </p>
    </article>
    <article>
      <section class="mt-20 sm:mt-32">
        <!-- The Gallery -->
        <h2
          class="max-w-xs mx-auto font-serif text-xl font-semibold tracking-wide text-center uppercase xs:max-w-sm xs:text-2xl sm:max-w-md sm:leading-8 md:max-w-2xl md:text-3xl text-app-accent"
        >
          Handmade furniture for extraordinary houses. <br />
          Let us inspire you
        </h2>
        <article v-if="isMobile" class="relative mt-16 overflow-hidden">
          <h3 class="p-2 font-serif italic font-semibold">Gallery</h3>
          <SpliderShowHorizontal />
        </article>
        <GridGallery v-else />
      </section>
      <section
        class="max-w-xs mx-auto mt-24 xs:max-w-sm xs:mt-32 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
      >
        <!-- The links to shops -->
        <h2
          class="font-serif text-2xl font-semibold text-center uppercase sm:text-4xl text-app-dark-gray md:pb-16 md:px-6"
        >
          Take a look at our offers
        </h2>
        <ShopCategoriesLinks class="md:flex md:flex-wrap" />
      </section>
      <OurWork />
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
