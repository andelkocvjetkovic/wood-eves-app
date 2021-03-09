<template>
  <article>
    <app-item-list :item-list="items" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const items = await $content("articles/neu").fetch();

    return {
      items,
    };
  },
};
</script>

<style></style>
