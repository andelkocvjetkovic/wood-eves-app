<template>
  <section
    class="max-w-xs mx-auto mt-6 sm:max-w-xl md:w-full sm:flex sm:flex-wrap md:max-w-none md:mx-0"
  >
    <div
      v-for="(item, i) in itemList"
      :key="item.uuid"
      class="sm:flex-basis-50 sm:p-4 md:flex-basis-33 xl:p-8"
      :class="[i !== 0 ? 'mt-8 sm:mt-0' : '']"
    >
      <ShopProductCard :path="getPath" :item="item" class="mt-6" />
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
      return `/shop/${path[2]}/`;
    },
  },
};
</script>
