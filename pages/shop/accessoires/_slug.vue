<template>
  <section>
    <app-item-info :item="item" />
  </section>
</template>

<script>
export default {
  async asyncData({ params, $content, error }) {
    const item = await $content("articles/accessoires", params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return { item };
  },
};
</script>
