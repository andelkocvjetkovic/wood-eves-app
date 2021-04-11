<template>
  <article class="xs:max-w-xs xs:mx-auto sm:max-w-md md:max-w-2xl">
    <ShopProductVariants v-if="item.variants" :item="item" />
    <ShopProductVariantsNone v-else :item="item" />
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
