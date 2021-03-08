<template>
  <article>
    <app-item-list :item-list="accessoires" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const accessoires = await $content("articles/accessoires").fetch();

    return {
      accessoires,
    };
  },
};
</script>

<style></style>
