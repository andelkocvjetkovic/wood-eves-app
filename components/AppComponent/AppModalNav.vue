<template>
  <nav
    role="navigation"
    class="fixed inset-0 z-40 flex flex-col items-center w-full h-full py-6 bg-app-white"
    @click.stop="clickOnModal"
  >
    <ul
      class="flex flex-col items-stretch justify-start flex-grow w-full h-full px-8 pt-20 space-y-6 text-xl font-semibold uppercase"
    >
      <li aria-haspopup="true">
        <button
          type="button"
          aria-label="dropdown"
          class="flex items-center justify-between w-full focus:outline-none"
          @click="toggleDropDown"
        >
          <span class="font-semibold uppercase">Shop</span
          ><span ref="arrowSvg"><app-arrow-down-svg class="w-8 h-8" /></span>
        </button>
        <transition :css="false" @enter="enterDropDown" @leave="leaveDropDown">
          <app-drop-down-menu
            v-if="isDropDownOpen"
            class="flex flex-col px-6 space-y-2 text-base capitalize"
          />
        </transition>
      </li>
      <li class=""><nuxt-link to="/uberuns">Über uns</nuxt-link></li>
      <li class=""><nuxt-link to="/ideas">Ideas</nuxt-link></li>
      <li class=""><nuxt-link to="/kontakt">Kontakt</nuxt-link></li>
    </ul>
    <div class="w-10/12">
      <hr />
      <app-social-icons class="mt-6 text-app-dark-gray" />
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isDropDownOpen: false,
    };
  },
  methods: {
    clickOnModal(e) {
      if (e.target.hasAttribute("aria-current")) {
        this.$emit("close-nav-modal");
      }
    },
    toggleDropDown() {
      this.isDropDownOpen = !this.isDropDownOpen;
    },
    enterDropDown(el, done) {
      var tl = this.$gsap.timeline({
        defaults: { transformOrigin: "50% 50%", ease: " circ.out" },
      });
      tl.to(this.$refs.arrowSvg, {
        rotate: 90,
        duration: 0.1,
        transformOrigin: "50% 50%",
      }).from(
        el,
        {
          opacity: 0,
          duration: 0.2,
          onComplete: done,
        },
        "<"
      );
    },
    leaveDropDown(el, done) {
      var tl = this.$gsap.timeline({
        defaults: { transformOrigin: "50% 50%", ease: " circ.in" },
      });
      tl.to(this.$refs.arrowSvg, {
        rotate: 0,
        duration: 0.1,
        transformOrigin: "50% 50%",
      }).to(
        el,
        {
          opacity: 0,
          duration: 0.15,
          onComplete: done,
        },
        "<"
      );
    },
  },
};
</script>
