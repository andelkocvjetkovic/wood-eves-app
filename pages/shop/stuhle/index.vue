<template>
  <article>
    <app-item-list :item-list="stuhle" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const stuhle = await $content("articles/stuhle").fetch();

    return {
      stuhle,
    };
  },
};
</script>

<style></style>
