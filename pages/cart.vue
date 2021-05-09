<template>
  <main
    class="px-4 pt-4 pb-12 bg-white text-app-dark-gray xs:max-w-sm xs:mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
  >
    <h2 class="mt-6 font-serif text-2xl text-center uppercase">
      Shopping cart
    </h2>
    <article v-if="cart.length > 0" class="">
      <CartTable class="min-w-full mt-6" />
      <section class="flex mt-6">
        <h2 class="sr-only">Go to the checkout</h2>
        <NuxtLink
          to="/checkout"
          class="w-full py-3 text-center rounded shadow-md bg-app-blue-gray text-app-white md:w-1/2 md:mx-auto"
        >
          Checkout
        </NuxtLink>
      </section>
    </article>
    <article v-else class="md:max-w-lg md:mx-auto">
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
