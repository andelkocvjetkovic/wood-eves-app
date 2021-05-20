<template>
  <table class="divide-y table-auto divide-app-dark-gray">
    <thead>
      <tr class="lg:text-xl xl:text-3xl">
        <th class="px-6 py-4">Item</th>
        <th class="px-6 py-4">Qty</th>
        <th class="px-6 py-4">Price</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-app-light-gray">
      <tr v-for="item in cart" :key="item.uuid" class="text-center">
        <td
          class="relative px-6 py-4 text-sm capitalize sm:flex sm:justify-between sm:items-center lg:text-base"
        >
          <button
            class="absolute left-0 transform -translate-y-1/2 top-1/2 sm:static sm:translate-y-0"
            @click="() => remove(item)"
          >
            <xIcon class="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
          <span class="flex flex-col text-base lg:text-2xl lg:font-semibold">
            {{ item.name }}
            <span class="text-xs lg:text-sm"
              >Wood: {{ item.wood.woodType }}</span
            >
            <span class="text-xs lg:text-sm"
              >Dimension: {{ item.dimension.data.length }}x{{
                item.dimension.data.width
              }}x{{ item.dimension.data.height }}</span
            >
          </span>
          <NuxtImg
            class="hidden sm:inline-block sm:w-16 sm:h-16"
            :src="`articles/${item.slug}/${item.wood.images[0]}`"
            width="70"
            height="70"
            loading="lazy"
          />
        </td>
        <td class="px-6 py-4 lg:text-lg lg:font-semibold">
          {{ item.quantity }}
        </td>
        <td class="px-6 py-4 lg:text-lg lg:font-semibold">
          {{ item.price }} $
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="lg:text-2xl lg:font-semibold">
        <td class="px-6 py-4 text-right">Total:</td>
        <td class="px-6 py-4 text-right lg:text-center" colspan="2">
          {{ cartPrice }} $
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import xIcon from "~/assets/svg/xIcon.svg";
export default {
  components: {
    xIcon,
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartPrice"]),
  },
  methods: {
    ...mapMutations(["removeFromCart"]),
    remove(item) {
      this.removeFromCart(item);
    },
  },
};
</script>

<style></style>
