<template>
  <nav class="fixed inset-0 w-full h-full bg-app-white">
    <ul
      class="flex flex-col items-start justify-start w-full h-full px-8 py-6 pt-20 text-3xl md:py-12 md:px-16 gap-y-6"
    >
      <li class="mt-12 md:mt-24">
        <nuxt-link class="" to="/shop">Shop</nuxt-link>
      </li>
      <li class=""><nuxt-link to="/uberuns">Über uns</nuxt-link></li>
      <li class=""><nuxt-link to="/">Kontakt</nuxt-link></li>
      <hr />
      <li class="self-center w-full mt-auto">
        <div class="flex justify-around">
          <a href="https://facebook.com/" target="_blank"
            ><span class="sr-only">Wood-Elvas Facebook</span>
            <app-facebook-svg class="w-10 h-10 text-app-white"
          /></a>
          <a href="https://instagram.com/" target="_blank">
            <span class="sr-only">Wood-Elvas Instagram</span>
            <app-instagram-svg class="w-10 h-10 st text-app-dark-gray" />
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>
