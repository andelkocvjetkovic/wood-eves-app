<template>
  <header
    class="sticky top-0 z-50 flex items-center justify-center w-full px-4 py-6 bg-app-white bg-opacity-95"
  >
    <nuxt-link
      class="absolute flex items-center overflow-hidden transform translate-x-1/2 -translate-y-1/2 w-14 h-14 right-1/2 top-1/2 justify-items-center"
      to="/"
    >
      <app-logo class="block w-full h-full" @click.native="onLogoClick" />
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
          <lazy-app-modal-nav
            v-if="isNavOpen"
            @close-nav-modal="toggleNavBar"
          />
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
      if (newValue === true) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
    $route(to, from) {
      if (this.isNavOpen === true) {
        this.toggleNavBar();
      }
    },
  },
  methods: {
    onLogoClick() {
      if (
        window.scrollY > 500 &&
        !this.isNavOpen &&
        this.$route.fullPath === "/"
      ) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } else if (this.isNavOpen && this.$route.fullPath === "/") {
        this.toggleNavBar();
      }
    },
    onEnterModalNav(el, done) {
      var parentEl = el;
      var children = el.children[0].children;
      var tl = this.$gsap.timeline({ defaults: { ease: "circ.out" } });
      tl.from(parentEl, {
        xPercent: 100,
        opacity: 0,
        duration: 0.2,
      }).from(
        children,
        {
          xPercent: 50,
          opacity: 0,
          stagger: {
            amount: 0.2,
            each: 0.033,
            from: "start",
            ease: "power2.in",
          },
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
        duration: 0.25,
        onComplete: done,
      }).to(
        parentEl,
        {
          xPercent: 100,
          duration: 0.25,
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
