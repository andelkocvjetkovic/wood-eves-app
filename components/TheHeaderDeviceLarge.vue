<template>
  <header class="sticky top-0 z-50 opacity-95 bg-app-white" role="banner">
    <nav
      class="flex py-6 mx-auto xl:py-8 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
    >
      <NuxtLink
        class="absolute z-50 w-12 h-12 transform -translate-y-1/2 xl:w-14 xl:h-14 top-1/2"
        to="/"
        ><LogoIcon class="w-full h-full" />
      </NuxtLink>
      <ul
        class="flex items-center ml-auto space-x-8 text-base font-semibold uppercase"
      >
        <DropDown
          ref="dropDownWindow"
          class="relative z-50"
          @toggleDrop="toggleDropDown"
          ><DropDownLinks
            v-if="isDropDownOpen"
            class="absolute right-0 flex flex-col mt-2 space-y-3 text-sm px-3/6 py-1/6 bg-app-white"
          />
        </DropDown>
        <li><NuxtLink to="/ideas">Ideas</NuxtLink></li>
        <li><NuxtLink to="/aboutus">About us</NuxtLink></li>
        <li><NuxtLink to="/contactus">Contat us</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import LogoIcon from "~/assets/svg/logoIcon.svg";
export default {
  components: {
    LogoIcon,
  },
  data() {
    return {
      isDropDownOpen: false,
    };
  },
  watch: {
    $route() {
      if (this.isDropDownOpen === true) {
        this.toggleDropDown();
      }
    },
  },
  mounted() {
    window.addEventListener("click", this.closeDropDownMenu);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closeDropDownMenu);
  },
  methods: {
    toggleDropDown() {
      this.isDropDownOpen = !this.isDropDownOpen;
    },
    closeDropDownMenu(e) {
      this.$nextTick(() => {
        if (
          this.isDropDownOpen &&
          !this.$refs.dropDownWindow.$el.contains(e.target)
        ) {
          this.toggleDropDown();
        }
      });
    },
  },
};
</script>

<style></style>
