<template>
  <nav
    class="fixed inset-0 z-40 w-full h-full bg-app-white"
    @click.stop="clickOnModal"
  >
    <ul
      class="flex flex-col items-start justify-start w-full h-full px-8 py-6 pt-20 text-xl font-semibold uppercase gap-y-6"
    >
      <li class="mt-12">
        <nuxt-link class="text-app-accent" to="/shop">Neu</nuxt-link>
      </li>
      <li class="">
        <nuxt-link class="" to="/shop">Shop</nuxt-link>
      </li>
      <li class=""><nuxt-link to="/uberuns">Über uns</nuxt-link></li>
      <li class=""><nuxt-link to="/">Kontakt</nuxt-link></li>
      <hr />
      <li class="self-center w-full mt-auto">
        <hr />
        <div class="flex justify-around mt-6">
          <a href="https://facebook.com/" target="_blank"
            ><span class="sr-only">Wood-Elvas Facebook</span>
            <app-facebook-svg class="w-7 h-7 text-app-white"
          /></a>
          <a href="https://instagram.com/" target="_blank">
            <span class="sr-only">Wood-Elvas Instagram</span>
            <app-instagram-svg class="w-7 h-7 text-app-dark-gray" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <span class="sr-only">Wood-Elvas Linkedin</span>
            <app-linkedin-svg class="w-7 h-7 text-app-dark-gray" />
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  methods: {
    clickOnModal(e) {
      if (e.target.hasAttribute("aria-current")) {
        this.$emit("close-nav-modal");
      }
    },
  },
};
</script>
