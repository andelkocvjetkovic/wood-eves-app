<template>
  <section class="max-w-xs mx-auto mt-12">
    <div
      v-for="(item, i) in itemList"
      :key="item.uuid"
      class="py-4"
      :class="[i !== 0 ? 'mt-12' : '']"
    >
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
