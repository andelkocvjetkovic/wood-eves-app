<template>
  <nav
    class="fixed inset-0 z-40 flex flex-col items-center w-full h-full py-6 bg-app-white"
    @click.stop="clickOnModal"
  >
    <ul
      class="flex flex-col items-stretch justify-start flex-grow w-full h-full px-8 pt-20 text-xl font-semibold uppercase gap-y-6"
    >
      <li>
        <p class="flex items-center justify-between">
          <span>Shop</span
          ><span ref="arrowSvg" @click="toggleDropDown"
            ><app-arrow-down-svg class="w-8 h-8"
          /></span>
        </p>
        <transition :css="false" @enter="enterDropDown" @leave="leaveDropDown">
          <app-drop-down-menu
            v-if="isDropDownOpen"
            class="px-6 text-base capitalize"
          />
        </transition>
      </li>
      <li class=""><nuxt-link to="/uberuns">Über uns</nuxt-link></li>
      <li class=""><nuxt-link to="/ideas">Ideas</nuxt-link></li>
      <li class=""><nuxt-link to="/">Kontakt</nuxt-link></li>
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
