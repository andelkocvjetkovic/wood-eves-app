<template>
  <article>
    <header class="mt-12">
      <h1 class="text-2xl font-semibold text-center">Stuhle</h1>
    </header>
    <app-item-list :item-list="stuhle" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const stuhle = await $content("articles/stuhle").fetch();

    return {
      stuhle,
    };
  },
};
</script>

<style></style>
