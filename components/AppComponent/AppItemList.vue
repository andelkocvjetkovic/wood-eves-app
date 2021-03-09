<template>
  <section class="max-w-xs mx-auto">
    <div v-for="item in itemList" :key="item.uuid" class="py-4 mt-24">
      <app-item-card :path="getPath" :item="item" class="mt-6" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    itemList: {
      type: [Object, Array],
      default: () => {},
    },
  },
  computed: {
    getPath() {
      var path = this.itemList[0].path.split("/");
      return path[2];
    },
  },
};
</script>

<style></style>
