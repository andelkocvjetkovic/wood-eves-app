<template>
  <header
    class="w-full px-4 py-6 flex justify-center items-center bg-app-white bg-opacity-80 relative"
  >
    <nuxt-link
      class="w-14 h-14 absolute right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2 flex justify-items-center items-center"
      to="/"
    >
      <app-logo class="block w-full h-full" />
    </nuxt-link>
    <button
      type="button"
      class="ml-auto w-9 h-7 focus:outline-none flex"
      @click="toggleNavBar"
    >
      <app-ham-menu ref="hamSvg" class="block w-full h-full" />
    </button>
  </header>
</template>

<script>
export default {
  tlNavHam: null,
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    initGsapTl() {
      this.$options.tlNavHam = this.$gsap.timeline({
        defaults: { transformOrigin: "50% 50%", ease: "sine.out" },
        paused: true,
      });
      var tl = this.$options.tlNavHam;
      var first = this.$refs.hamSvg.$refs.first;
      var middle = this.$refs.hamSvg.$refs.middle;
      var last = this.$refs.hamSvg.$refs.last;
      tl.to(middle, {
        x: -20,
        duration: 0.1,
      })
        .to(
          first,
          {
            rotation: 45,
            y: 2,
            duration: 0.2,
          },
          "<0.05"
        )
        .to(
          last,
          {
            rotation: -45,
            y: -2,
            duration: 0.2,
          },
          "<"
        );
    },
    toggleNavBar() {
      this.$nextTick(() => {
        if (Object.is(this.$options.tlNavHam, null)) {
          this.initGsapTl();
        }
        if (this.$options.tlNavHam.isActive()) {
          return;
        }
        if (this.isNavOpen == false) {
          this.$options.tlNavHam.play();
        } else {
          this.$options.tlNavHam.reverse();
        }
        this.isNavOpen = !this.isNavOpen;
      });
    },
  },
};
</script>

<style></style>
