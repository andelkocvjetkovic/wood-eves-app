<template>
  <article>
    <header class="mt-6">
      <h1 class="font-serif text-3xl font-semibold text-center">Accessoires</h1>
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
