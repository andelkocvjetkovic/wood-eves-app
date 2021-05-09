<template>
  <section
    class="max-w-xs mx-auto mt-6 xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
  >
    <header class="mt-6">
      <h1 class="font-serif text-3xl font-semibold text-center lg:text-4xl">
        {{ header }}
      </h1>
    </header>
    <article
      class="pt-px mt-6 xs:grid xs:grid-cols-2 xs:gap-x-4 xs:gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:mt-8 xl:gap-x-8 xl:gap-y-12"
    >
      <ShopProductCard
        v-for="(item, i) in itemList"
        :key="item.uuid"
        :item="item"
        :class="[i !== 0 ? 'mt-8' : 'mt-6']"
        class="xs:flex-basis-50 md:flex-basis-33 xs:mt-0"
      />
    </article>
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
    header: {
      type: String,
      required: true,
    },
  },
};
</script>
