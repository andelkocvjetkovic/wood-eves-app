<template>
  <section>
    {{ item.name }}
  </section>
</template>

<script>
export default {
  async asyncData({ params, redirect, $content }) {
    const item = await $content("articles/accessoires", params.slug).fetch();

    return { item };
  },
};
</script>
