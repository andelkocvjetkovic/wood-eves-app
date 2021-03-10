<template>
  <article>
    <header class="mt-12">
      <h1 class="text-2xl font-semibold text-center">Accessoires</h1>
    </header>
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
