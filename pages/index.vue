<template>
  <main>
    <!--Home Hero background and text with apper animation -->
    <article class="lg:max-w-4xl lg:mx-auto xl:max-w-5xl">
      <section class="masthead h-screen/75vh" aria-label="Image Description">
        <h1
          class="mt-12 font-serif text-3xl font-semibold text-center text-shadow-xl text-app-white sm:mx-auto sm:text-4xl sm:w-3/5 md:mt-14"
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
        class="w-4/5 mx-auto mt-6 text-base leading-snug text-center text-shadow xs:mt-8 md:w-3/4 text-app-dark-gray lg:w-2/4 lg:text-lg"
      >
        Fugar plum gummi bears biscuit. Wafer biscuit marzipan cookie icing
        sesame snaps marzipan. Marshmallow sweet jelly-o pudding bear claw
        gummies. Powder chocolate cake tiramisu topping macaroon tart pudding
        fruitcake. Pie oat cake fruitcake oat cake. Gummi bears soufflé chupa
        chups sugar plum danish cupcake cheesecake.
      </p>
    </article>
    <article>
      <section class="mt-16 sm:mt-24">
        <!-- The Gallery -->
        <h2
          class="px-4 font-serif text-3xl font-semibold tracking-tight text-center capitalize xs:px-0 text-shadow xs:mx-auto xs:max-w-sm sm:max-w-md sm:text-4xl sm:leading-none lg:max-w-4xl text-app-accent"
        >
          Handmade furniture for extraordinary houses. <br />
          Let us inspire you!
        </h2>
        <article class="mt-6 overflow-hidden">
          <ClientOnly>
            <LazySpliderShowHorizontal v-if="isMobile" />
            <LazyGridGallery
              v-else
              class="md:max-w-2xl md:mx-auto lg:max-w-4xl xl:max-w-5xl"
            />
          </ClientOnly>
        </article>
      </section>
      <section
        class="px-4 mx-auto mt-24 xs:px-0 xs:mx-auto xs:max-w-sm xs:mt-28 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
      >
        <!-- The links to shops -->
        <h2
          class="px-6 font-serif text-3xl font-bold text-center uppercase text-shadow-sm sm:text-4xl sm:px-0"
        >
          Take a look at our offers
        </h2>
        <ShopCategoriesLinks
          class="flex flex-col mt-12 gap-y-10 md:flex-row md:flex-wrap sm:mt-16 md:gap-y-0 sm:max-w-sm sm:mx-auto sm:gap-y-12 md:max-w-none md:w-full md:gap-x-1 lg:gap-x-4"
        />
      </section>
      <OurWork
        class="px-4 pb-6 mt-16 xs:px-0 md:pb-10 bg-app-light-gray text-app-dark-gray"
      />
    </article>
  </main>
</template>

<script>
export default {
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
