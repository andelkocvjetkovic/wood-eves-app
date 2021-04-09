<template>
  <nav
    role="navigation"
    class="fixed inset-0 z-40 flex flex-col items-center w-full h-full py-6 bg-app-white"
    @click.stop="clickOnModal"
  >
    <ul
      class="flex flex-col items-stretch justify-start flex-grow w-full h-full px-8 pt-20 space-y-6 text-xl font-semibold uppercase"
    >
      <DropDown @toggleDrop="toggleDropDown"
        ><DropDownLinks
          v-if="isDropDownOpen"
          class="flex flex-col space-y-2 text-sm ml-9"
        />
      </DropDown>
      <li><NuxtLink to="/uberuns">Über uns</NuxtLink></li>
      <li><NuxtLink to="/ideas">Ideas</NuxtLink></li>
      <li><NuxtLink to="/kontakt">Kontakt</NuxtLink></li>
    </ul>
    <div class="w-10/12">
      <hr />
      <SocialIcons class="mt-6 text-app-dark-gray" />
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
