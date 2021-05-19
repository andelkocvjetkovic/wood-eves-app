<template>
  <article>
    <NuxtContent class="prose-sm prose" :document="shippingReturn" />
  </article>
</template>

<script>
export default {
  data() {
    return {
      shippingReturn: null,
      showMore: true,
    };
  },
  async fetch() {
    this.shippingReturn = await this.$content("shipping_returns").fetch();
  },
};
</script>

<style></style>
