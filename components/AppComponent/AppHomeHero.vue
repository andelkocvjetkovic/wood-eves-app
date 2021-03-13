<template>
  <section class="masthead" role="img" aria-label="Image Description">
    <transition appear :css="false" @appear="customAppearHook">
      <h1
        class="max-w-sm px-1 mx-auto mt-12 font-serif text-3xl font-semibold text-center text-app-white sm:text-4xl sm:max-w-md md:max-w-2xl md:mt-20"
      >
        <q>Tawar faer</q><br />Die Seele des Holzes Mehr als nur Möbel ...
      </h1>
    </transition>
  </section>
</template>
<script>
export default {
  methods: {
    customAppearHook(el, done) {
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
