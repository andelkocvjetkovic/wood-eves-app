<template>
  <header class="sticky top-0 z-50 opacity-95 bg-app-white">
    <nav class="flex py-10 mx-auto md:max-w-2xl lg:max-w-4xl">
      <nuxt-link
        class="absolute w-16 h-16 transform -translate-y-1/2 top-1/2"
        to="/"
        ><app-logo class="w-full h-full" />
      </nuxt-link>
      <ul
        class="flex items-center justify-between ml-auto font-semibold uppercase md:text-base gap-x-6"
      >
        <li class="">
          <nuxt-link class="text-app-accent" to="/shop">Neu</nuxt-link>
        </li>
        <li class="">
          <nuxt-link class="" to="/shop">Shop</nuxt-link>
        </li>
        <li class=""><nuxt-link to="/uberuns">Über uns</nuxt-link></li>
        <li class=""><nuxt-link to="/">Kontakt</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
