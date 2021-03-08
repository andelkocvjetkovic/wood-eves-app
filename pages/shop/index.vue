<template>
  <article class="mt-6">
    <p class="text-5xl text-center">Click above me :))</p>
    <h1 class="text-2xl text-center">I'm home page of shop :)</h1>
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
