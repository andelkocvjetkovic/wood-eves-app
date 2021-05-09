<template>
  <header
    class="sticky top-0 z-50 opacity-95 bg-app-white bg-opacity-95"
    role="banner"
  >
    <nav
      class="flex py-6 mx-auto xl:py-8 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
    >
      <div
        class="absolute z-50 flex items-center space-x-4 transform -translate-y-1/2 top-1/2"
      >
        <NuxtLink class="w-14 h-14 xl:w-16 xl:h-16" to="/"
          ><LogoIcon class="w-full h-full" @click.native="onLogoClick" />
        </NuxtLink>
        <AppCart v-if="cartLength > 0" />
      </div>
      <ul
        class="flex items-center ml-auto space-x-8 text-base font-semibold uppercase"
      >
        <DropDown
          ref="dropDownWindow"
          class="relative z-50"
          @toggleDrop="toggleDropDown"
          ><DropDownLinks
            v-if="isDropDownOpen"
            class="absolute left-0 right-0 flex flex-col mt-6 space-y-4 text-sm w-52 px-2/6 py-1/6 bg-app-white"
          />
        </DropDown>
        <li><AppNuxtLink to="/ideas">Ideas</AppNuxtLink></li>
        <li><AppNuxtLink to="/aboutus">About us</AppNuxtLink></li>
        <li><AppNuxtLink to="/contactus">Contat us</AppNuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["cartLength"]),
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
    onLogoClick() {
      if (window.scrollY > 500 && this.$route.fullPath == "/") {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    },
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
