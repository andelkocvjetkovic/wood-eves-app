<template>
  <article>
    <header class="mt-6">
      <h1 class="font-serif text-3xl font-semibold text-center">Neu</h1>
    </header>
    <ShopProductsList :item-list="items" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const nueItems = await $content("articles/neu")
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });
    return {
      items: nueItems,
    };
  },
};
</script>

<style></style>
