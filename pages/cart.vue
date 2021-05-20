<template>
  <main class="py-6">
    <article
      class="px-4 xs:max-w-sm xs:mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
    >
      <h1 class="mt-6 font-serif text-2xl text-center uppercase lg:text-3xl">
        Shopping cart
      </h1>
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
      <article v-else class="md:max-w-sm md:mx-auto xl:max-w-md">
        <h2 class="mt-1 text-lg text-center">
          You have nothing in your shopping cart.
        </h2>
        <p class="flex justify-center mt-4">
          <NuxtLink
            class="inline-block px-4 py-1 mt-4 uppercase transition-colors duration-150 ease-out rounded-sm shadow-md lg:hover:bg-app-accent lg:hover:text-app-white lg:mt-6 lg:px-6 lg:text-lg lg:font-medium ring-1 ring-app-accent focus:outline-none focus-visible:bg-app-accent focus-visible:text-app-white active:text-app-accent"
            to="/"
            >Continue Shopping</NuxtLink
          >
        </p>
        <CartIsEmpty class="pt-px mt-8"></CartIsEmpty>
      </article>
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
