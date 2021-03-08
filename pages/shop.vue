<template>
  <main class="py-16">
    <h1 class="text-3xl text-center">Welcome to our shop</h1>
    <nav class="mt-6">
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
    <nuxt-child />
  </main>
</template>

<script>
export default {};
</script>

<style></style>
