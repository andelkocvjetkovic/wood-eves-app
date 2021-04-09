<template>
  <article>
    <header class="mt-6">
      <h1 class="font-serif text-3xl font-semibold text-center">Stuhle</h1>
    </header>
    <ShopProductsList :item-list="stuhle" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const stuhle = await $content("articles/stuhle")
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      stuhle,
    };
  },
};
</script>

<style></style>
