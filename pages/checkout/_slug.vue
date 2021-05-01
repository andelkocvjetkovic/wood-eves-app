<template>
  <main class="max-w-xs py-6 mx-auto">
    <h1 class="text-xl text-center capitalize">checkout</h1>
    <section class="mt-6">
      <h2 class="text-lg">Your cart:</h2>
      <CartTable class="min-w-full mt-2" />
    </section>
    <section>
      <h2 class="text-sm">
        Your email address:
        <br />
        <span class="w-full text-lg">{{ user.email }}</span>
      </h2>
      <article class="mt-6">
        <h4>Credit card</h4>
        <section v-if="isStripeLoaded">
          <StripeElements
            v-slot:default="{ elements }"
            ref="elms"
            :stripe-key="stripeKey"
            :instance-options="instanceOptions"
            :elements-options="elementsOptions"
            class="w-full p-2 mt-3 group"
          >
            <StripeElement
              ref="card"
              type="card"
              :elements="elements"
              :options="cardOptions"
              class="group-focus:ring-1 ring-app-accent"
            />
          </StripeElements>
          <AppButton type="button" class="w-full mt-3" @click.native="pay"
            >Pay with credit card</AppButton
          >
        </section>
        <section>
          <header class="mt-6">
            <h2 class="flex justify-between">
              Subtotal: <span class="">{{ cartPrice }} $</span>
            </h2>
            <h3 class="flex justify-between">Shipping: <span>Free</span></h3>
          </header>
        </section>
      </article>
    </section>
  </main>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { StripeElements, StripeElement } from "vue-stripe-elements-plus";
export default {
  components: {
    StripeElements,
    StripeElement,
  },
  middleware({ store, error }) {
    if (!store.state.order) {
      return error({
        statusCode: 403,
        message: "You  have to first make a  to make access on this page",
      });
    }
  },
  data() {
    return {
      isStripeLoaded: false,
      stripeKey: process.env.STRIPE_PUBLIC_KEY,
      instanceOptions: {
        // https://stripe.com/docs/js/initializing#init_stripe_js-options
      },
      elementsOptions: {
        // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
      },
      cardOptions: {
        // reactive
        // remember about Vue 2 reactivity limitations when dealing with options
        value: {
          postalCode: "",
        },
        style: {
          base: {
            color: "#32325D",
            fontWeight: 500,
            fontFamily: "Inter UI, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",

            "::placeholder": {
              color: "#CFD7DF",
            },
          },
          invalid: {
            color: "#E25950",
          },
        },
        // https://stripe.com/docs/stripe.js#element-options
      },
    };
  },
  head() {
    return {
      script: [
        {
          hid: "stripe",
          src: "https://js.stripe.com/v3/",
          defer: true,
          callback: () => {
            this.isStripeLoaded = true;
          },
        },
      ],
    };
  },
  computed: {
    ...mapState({
      user: "order",
    }),
    ...mapGetters(["cartPrice"]),
    param() {
      return this.$route.params;
    },
  },
  methods: {
    pay() {
      var groupComponent = this.$refs.elms;
      var cardComponent = this.$refs.card;
      var cardElement = cardComponent.stripeElement;
      groupComponent.instance.createToken(cardElement).then((data) => {
        this.$store.dispatch("postStripeFunction", data);
      });
    },
  },
};
</script>

<style></style>
