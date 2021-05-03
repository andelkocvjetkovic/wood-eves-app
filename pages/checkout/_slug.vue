<template>
  <main class="relative max-w-xs py-12 mx-auto sm:max-w-sm xs:max-w-sm">
    <section class="mt-6 xs:mt-12">
      <h1 class="text-xl text-center capitalize xs:text-2xl">checkout</h1>
      <h2 class="mt-6 text-sm">
        Your email address:
        <br />
        <span class="w-full text-lg">{{ userEmail }}</span>
      </h2>
      <article class="mt-6">
        <h4>Credit card:</h4>
        <div v-if="isStripeLoaded">
          <StripeElements
            v-slot:default="{ elements }"
            ref="elms"
            :stripe-key="stripeKey"
            class="w-full p-2 mt-3"
          >
            <StripeElement
              ref="card"
              type="card"
              :elements="elements"
              :options="cardOptions"
            />
          </StripeElements>
          <p v-if="error" class="mt-6 text-app-red">
            {{ error.message }}
          </p>
          <AppButton
            type="button"
            class="w-full mt-3 disabled:opacity-40"
            @click.native="pay"
            >Pay with credit card</AppButton
          >
        </div>
        <header class="mt-6">
          <h2 class="flex justify-between">
            Subtotal: <span class="">{{ cartPrice }} $</span>
          </h2>
          <h3 class="flex justify-between">Shipping: <span>Free</span></h3>
        </header>
      </article>
    </section>
    <AppButton
      class="absolute left-0 w-24 py-1 top-5 bg-app-accent text-app-white"
      @click.native="goBack"
    >
      Go back
    </AppButton>
    <ClientOnly>
      <Portal to="modalWindow">
        <div
          v-if="cardStatus !== 'idle'"
          class="fixed inset-0 flex items-center justify-center w-full h-full bg-opacity-80 bg-app-light-gray"
        >
          <div
            class="flex flex-col items-center justify-center w-1/2 p-5 h-1/2 bg-app-white text-app-dark-gray"
          >
            <div v-if="cardStatus === 'loading'">
              <p class="text-center">
                Please hold, we're filling up your cart with goodies
              </p>
              <AppSpinner class="mt-6" />
            </div>
            <div v-else-if="cardStatus === 'success'" class="text-center">
              <h2 class="text-lg font-semibold">Success!</h2>
              <p class="mt-1 text-sm">
                Thank you for your purchase. You'll be receiving your items in 4
                business days.
              </p>
              <p class="mt-8 text-sm">Forgot something?</p>
              <NuxtLink to="/" class="inline-block mt-1 underline"
                >Back to Home <span>&#8594;</span></NuxtLink
              >
            </div>
            <div v-else-if="cardStatus === 'error'" class="text-center">
              <p class="text-app-red">
                Oops, something went wrong.
                <AppButton class="w-full mt-6 text-xs" @click.native="tryAgain"
                  >Please try again</AppButton
                >
              </p>
            </div>
            <div v-else>Something went wrong</div>
          </div>
        </div>
      </Portal>
    </ClientOnly>
  </main>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { StripeElements, StripeElement } from "vue-stripe-elements-plus";
export default {
  components: {
    StripeElements,
    StripeElement,
  },
  beforeRouteLeave(to, from, next) {
    if (this.cardStatus !== "idle") {
      this.resetOrder();
    }
    next();
  },
  layout: "payout",
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
      stripeKey: this.$config.stripePublic,
      cardOptions: {
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
      error: null,
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
      cardStatus: "cartUIStatus",
    }),
    ...mapGetters(["cartPrice", "userEmail"]),
    param() {
      return this.$route.params;
    },
    isModalOpen() {
      // this return true on every cart status unless it is  "idle"
      // idle !== idle return false
      // success !== idle return true
      return this.$store.state.cartUIStatus !== "idle";
    },
  },
  watch: {
    isModalOpen(newValue) {
      // if modal is open , isModalOpen.value === true add class overflow-hidden

      // is isModalOpen newValue === true
      if (newValue === true) {
        // add class for modal
        document.body.classList.add("overflow-hidden");
      } else {
        // remove class for modal
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
  methods: {
    ...mapActions(["resetOrder"]),
    ...mapMutations(["updateCartUI"]),
    tryAgain() {
      this.updateCartUI("idle");
    },
    pay() {
      var groupComponent = this.$refs.elms;
      var cardComponent = this.$refs.card;
      var cardElement = cardComponent.stripeElement;
      groupComponent.instance.createToken(cardElement).then((data) => {
        if (data.error) {
          console.log(data.error);
          this.error = data.error;
          return;
        }
        this.error = null;
        this.$store.dispatch("postStripeFunction", data);
      });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
