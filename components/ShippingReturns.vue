<template>
  <article>
    <button
      class="underline focus:outline-none active:text-app-dark-gray focus-visible:ring-1 ring-offset-black"
      @click="show"
    >
      Shipping & Returns <span>&#8594;</span>
    </button>
    <NuxtContent
      v-if="showMore"
      class="mx-auto mt-4 prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
      :document="paddingReturn"
    />
  </article>
</template>

<script>
export default {
  data() {
    return {
      paddingReturn: null,
      showMore: false,
    };
  },
  async fetch() {
    this.paddingReturn = await this.$content("shipping_returns").fetch();
  },
  methods: {
    show() {
      this.showMore = !this.showMore;
    },
  },
};
</script>

<style></style>
