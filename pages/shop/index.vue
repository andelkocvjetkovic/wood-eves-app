<template>
  <article>
    <app-item-list :item-list="items" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const nueItems = await $content("articles/neu").fetch();
    return {
      items: nueItems,
    };
  },
};
</script>

<style></style>
