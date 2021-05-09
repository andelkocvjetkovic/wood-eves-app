<template>
  <article>
    <ShopProductsList :item-list="cuttingBoards" :header="'Cutting Boards'" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const cuttingBoards = await $content("articles/cutting-boards")
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      cuttingBoards,
    };
  },
};
</script>

<style></style>
