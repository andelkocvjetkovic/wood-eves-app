<template>
  <article>
    <ShopProductsList :item-list="chairs" :header="'Chairs'" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const chairs = await $content("articles/chair")
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      chairs,
    };
  },
};
</script>

<style></style>
