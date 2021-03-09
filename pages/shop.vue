<template>
  <main class="py-16">
    <h1 class="text-3xl text-center">Welcome to our shop</h1>
    <nav class="sticky z-30 mt-6 top-20">
      <ul class="flex justify-around underline">
        <li>
          <nuxt-link to="/shop/accessoires">Accessoires</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/shop/stuhle">Stuhle</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/shop/tish">Tish</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt-child class="pb-12" />
  </main>
</template>
