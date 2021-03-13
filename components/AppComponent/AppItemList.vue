<template>
  <section
    class="mt-12 sm:max-w-sm sm:mx-auto md:w-full md:flex md:flex-wrap md:max-w-none lg:w-full lg:mx-0"
  >
    <div
      v-for="(item, i) in itemList"
      :key="item.uuid"
      class="py-4 md:flex-basis-50 md:px-6 lg:flex-basis-33 lg:flex-grow-0 lg:px-7 lg:py-6"
      :class="[i !== 0 ? 'mt-12 md:mt-0' : '']"
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
