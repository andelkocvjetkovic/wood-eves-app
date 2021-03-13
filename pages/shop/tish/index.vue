<template>
  <article>
    <header class="mt-6">
      <h1 class="font-serif text-3xl font-semibold text-center">Tish</h1>
    </header>
    <app-item-list :item-list="tish" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const tish = await $content("articles/tish").fetch();

    return {
      tish,
    };
  },
};
</script>

<style></style>
