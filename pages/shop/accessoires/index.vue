<template>
  <article>
    <header class="mt-6">
      <h1 class="font-serif text-3xl font-semibold text-center">Accessoires</h1>
    </header>
    <ShopProductsList :item-list="accessoires" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const accessoires = await $content("articles/accessoires")
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      accessoires,
    };
  },
};
</script>

<style></style>
