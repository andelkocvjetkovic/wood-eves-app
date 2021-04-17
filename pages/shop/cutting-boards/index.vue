<template>
  <article>
    <header class="mt-6">
      <h1 class="font-serif text-3xl font-semibold text-center">Tish</h1>
    </header>
    <ShopProductsList :item-list="tish" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const tish = await $content("articles/cutting-boards")
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      tish,
    };
  },
};
</script>

<style></style>
