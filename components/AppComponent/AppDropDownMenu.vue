<template>
  <li class="relative">
    <button
      type="button"
      aria-haspopup="true"
      aria-controls="dropdown1"
      class="flex items-center justify-between w-full md:space-x-1"
      @click="toggleDrop"
    >
      <slot name="dropDownHeader"
        ><span class="font-semibold uppercase">Shop</span></slot
      ><span ref="arrowSvg"
        ><app-arrow-down-svg class="w-8 h-8 md:w-6 md:h-6"
      /></span>
    </button>
    <transition :css="false" @enter="enterDropDown" @leave="leaveDropDown">
      <slot></slot>
    </transition>
  </li>
</template>
<script>
export default {
  methods: {
    toggleDrop() {
      this.$emit("toggleDrop");
    },
    enterDropDown(el, done) {
      var tl = this.$gsap.timeline({
        defaults: { transformOrigin: "50% 50%", ease: " circ.out" },
      });
      tl.to(this.$refs.arrowSvg, {
        rotate: 90,
        duration: 0.1,
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
