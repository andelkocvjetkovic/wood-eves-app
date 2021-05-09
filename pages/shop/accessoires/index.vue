<template>
  <article>
    <ShopProductsList :item-list="accessoires" :header="'Accessoires'" />
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
