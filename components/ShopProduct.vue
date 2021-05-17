<template>
  <ShopProductSm v-if="isMobile" :item="item" />
  <ShopProductMd v-else :item="item" />
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isMobile() {
      return !this.$device?.tablet;
    },
  },
};
</script>
