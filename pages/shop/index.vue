<template>
  <article>
    <header class="mt-6">
      <h1 class="font-serif text-3xl font-semibold text-center">Neu</h1>
    </header>
    <app-item-list :item-list="items" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const nueItems = await $content("articles/neu").fetch();
    return {
      items: nueItems,
    };
  },
};
</script>

<style></style>
