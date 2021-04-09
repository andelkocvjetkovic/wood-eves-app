<template>
  <section>
    <ShopProduct :item="item" />
  </section>
</template>

<script>
export default {
  async asyncData({ params, $content, error }) {
    const item = await $content("articles/stuhle", params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });
    return { item };
  },
};
</script>
