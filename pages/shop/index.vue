<template>
  <article>
    <ShopProductsList :item-list="items" :header="'New'" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const boardsItems = await $content("articles/cutting-boards")
      .where({ isNew: true })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });
    const chairItems = await $content("articles/chair")
      .where({ isNew: true })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });
    const accessoiresItems = await $content("articles/accessoires")
      .where({ isNew: true })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });
    return {
      items: [...boardsItems, ...chairItems, ...accessoiresItems],
    };
  },
};
</script>

<style></style>
