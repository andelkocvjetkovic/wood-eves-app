<template>
  <article class="mt-6">
    <section>
      <app-item-list :item-list="accessoires" />

      <app-item-list :item-list="tish" />

      <app-item-list :item-list="stuhle" />
    </section>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const tish = await $content("articles/tish").limit(2).fetch();
    const accessoires = await $content("articles/accessoires").limit(2).fetch();
    const stuhle = await $content("articles/stuhle").limit(2).fetch();

    return {
      tish,
      accessoires,
      stuhle,
    };
  },
};
</script>

<style></style>
