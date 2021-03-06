<template>
  <header
    class="fixed top-0 z-20 flex items-center justify-center w-full px-4 py-6 bg-app-white bg-opacity-95"
  >
    <nuxt-link
      class="absolute flex items-center transform translate-x-1/2 -translate-y-1/2 w-14 h-14 right-1/2 top-1/2 justify-items-center"
      to="/"
    >
      <app-logo class="block w-full h-full" />
    </nuxt-link>
    <button
      type="button"
      class="relative z-50 flex ml-auto w-9 h-7 focus:outline-none"
      @click="toggleNavBar"
    >
      <app-ham-menu ref="hamSvg" class="relative z-20 block w-full h-full" />
    </button>
    <client-only>
      <portal to="navModal">
        <transition
          :css="false"
          @enter="onEnterModalNav"
          @leave="leaveModalNav"
        >
          <lazy-app-modal-nav v-if="isNavOpen" />
        </transition>
      </portal>
    </client-only>
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
  computed: {
    navModalOpen() {
      return this.isNavOpen;
    },
  },
  watch: {
    isNavOpen(newValue) {
      // if (newValue == true) {
      //   const scrollY = window.scrollY;
      //   document.body.style.position = "fixed";
      //   document.body.style.top = `-${scrollY}px`;
      // } else {
      //   const scrollY = document.body.style.top;
      //   document.body.style.position = "";
      //   document.body.style.top = "";
      //   window.scrollTo(0, parseInt(scrollY || "0") * -1);
      // }
      if (newValue === true) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
  methods: {
    onEnterModalNav(el, done) {
      var parentEl = el;
      var children = el.children[0].children;
      var tl = this.$gsap.timeline({ defaults: { ease: "circ.out" } });
      tl.from(parentEl, {
        xPercent: 100,
        duration: 0.3,
      }).from(
        children,
        {
          xPercent: 25,
          opacity: 0,
          stagger: 0.05,
          duration: 0.3,
          onComplete: done(),
        },
        "<0.1"
      );
    },
    leaveModalNav(el, done) {
      var parentEl = el;
      var children = el.children[0].children;
      var tl = this.$gsap.timeline({ defaults: { ease: "circ.in" } });
      tl.to(children, {
        opacity: 0,
        duration: 0.3,
        onComplete: done,
      }).to(
        parentEl,
        {
          xPercent: 100,
          duration: 0.3,
        },
        "<"
      );
    },
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
