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
    const boardsItems = await $content("articles/cutting-boards")
      .where({ isNew: true })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });
    const chairItems = await $content("articles/stuhle")
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
