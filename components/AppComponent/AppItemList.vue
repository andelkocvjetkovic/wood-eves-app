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
    path: {
      type: String,
      default: "",
    },
  },
  computed: {
    getPath() {
      var path = this.itemList[0].path.split("/");
      if (path[2] === "neu") {
        return `/shop/`;
      } else {
        return `/shop/${path[2]}/`;
      }
    },
  },
};
</script>

<style></style>
