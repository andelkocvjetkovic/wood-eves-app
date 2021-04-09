<template>
  <article class="xs:max-w-xs xs:mx-auto md:max-w-none md:w-full">
    <ShopProductVariants v-if="item.variants" :item="item" />
    <ShopProducntVariantsNone v-else :item="item" />
  </article>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
