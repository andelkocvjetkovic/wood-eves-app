<template>
  <main class="px-4 py-6 bg-app-white text-app-dark-gray">
    <h2 class="font-serif text-xl text-center uppercase">Shopping cart</h2>
    <article v-if="cart.length > 0">
      <table class="min-w-full mt-6 divide-y table-auto divide-app-dark-gray">
        <thead>
          <tr>
            <th class="px-6 py-4">Item</th>
            <th class="px-6 py-4">Qty</th>
            <th class="px-6 py-4">Price</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-app-light-gray">
          <tr v-for="item in cart" :key="item.uuid" class="text-center">
            <td class="relative px-6 py-4 text-sm capitalize">
              <button
                class="absolute left-0 transform -translate-y-1/2 top-1/2"
                @click="() => remove(item)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-labelledby="remove"
                >
                  <title id="remove">Remove from cart</title>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <span class="flex flex-col text-base">
                {{ item.name }}
                <span class="text-xs">Wood: {{ item.wood.woodType }}</span>
                <span class="text-xs"
                  >Dimension: {{ item.dimension.data.length }}x{{
                    item.dimension.data.width
                  }}x{{ item.dimension.data.height }}</span
                >
              </span>
            </td>
            <td class="px-6 py-4">{{ item.quantity }}</td>
            <td class="px-6 py-4">{{ item.price }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="px-6 py-4 text-right">Total:</td>
            <td class="px-6 py-4 text-right" colspan="2">{{ cartPrice }} $</td>
          </tr>
        </tfoot>
      </table>

      <section class="mt-6">
        <h2 class="sr-only">Go to the checkout</h2>
        <button
          class="w-full py-3 rounded shadow-md bg-app-blue-gray text-app-light-gray"
        >
          Checkout
        </button>
      </section>
    </article>
    <article v-else>
      <h2 class="mt-6">You have nothing in your shopping cart.</h2>
      <p class="mt-6">
        <NuxtLink to="/" class="underline">Continue Shopping &#8594;</NuxtLink>
      </p>
      <CartIsEmpty class="mt-6"></CartIsEmpty>
    </article>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import CartIsEmpty from "~/assets/svg/cart-is-empty.svg";
export default {
  components: {
    CartIsEmpty,
  },
  computed: {
    ...mapGetters(["cart", "cartPrice"]),
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
