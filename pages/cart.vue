<template>
  <main class="px-4 py-6 bg-app-white text-app-dark-gray">
    <h2 class="font-serif text-xl text-center uppercase">Shopping cart</h2>
    <article v-if="cart.length > 0">
      <CartTable class="min-w-full mt-6" />
      <section class="flex mt-6">
        <h2 class="sr-only">Go to the checkout</h2>
        <NuxtLink
          to="/checkout"
          class="w-full py-3 text-center rounded shadow-md bg-app-blue-gray text-app-white"
        >
          Checkout
        </NuxtLink>
      </section>
    </article>
    <article v-else>
      <h2 class="mt-1 text-lg text-center">
        You have nothing in your shopping cart.
      </h2>
      <p class="mt-4">
        <NuxtLink class="inline-block w-full text-center underline" to="/"
          >Continue Shopping &#8594;</NuxtLink
        >
      </p>
      <CartIsEmpty class="py-6"></CartIsEmpty>
    </article>
  </main>
</template>

<script>
import { mapState } from "vuex";
import CartIsEmpty from "~/assets/svg/cart-is-empty.svg";
export default {
  components: {
    CartIsEmpty,
  },
  computed: {
    ...mapState(["cart"]),
  },
};
</script>

<style></style>
