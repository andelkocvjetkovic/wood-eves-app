<template>
  <main>
    <h1>I'm shop page</h1>
    <nav>
      <ul>
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
