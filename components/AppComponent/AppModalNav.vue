<template>
  <nav
    role="navigation"
    class="fixed inset-0 z-40 flex flex-col items-center w-full h-full py-6 bg-app-white"
    @click.stop="clickOnModal"
  >
    <ul
      class="flex flex-col items-stretch justify-start flex-grow w-full h-full px-8 pt-20 space-y-6 text-xl font-semibold uppercase"
    >
      <app-drop-down-menu @toggleDrop="toggleDropDown"
        ><app-drop-down-list
          v-if="isDropDownOpen"
          class="flex flex-col space-y-2 text-sm px-1/6"
        />
      </app-drop-down-menu>
      <li><nuxt-link to="/uberuns">Über uns</nuxt-link></li>
      <li><nuxt-link to="/ideas">Ideas</nuxt-link></li>
      <li><nuxt-link to="/kontakt">Kontakt</nuxt-link></li>
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
  },
};
</script>
