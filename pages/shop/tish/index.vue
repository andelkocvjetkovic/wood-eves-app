<template>
  <article>
    <app-item-list :item-list="tish" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const tish = await $content("articles/tish").fetch();

    return {
      tish,
    };
  },
};
</script>

<style></style>
