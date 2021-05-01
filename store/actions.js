import axios from "axios";
import { v4 as uuid4 } from "uuid";
export default {
  addToCart({ commit }, payload) {
    commit("addToCart", payload);
  },
  async postStripeFunction({ commit, getters }, payload) {
    payload.stripeEmail = getters.userEmail.email;
    try {
      var result = await axios.post(
        "https://heuristic-stonebraker-e3023a.netlify.app/.netlify/functions/index",
        {
          stripeEmail: getters.userEmail,
          stripeAmt: Math.floor(getters.cartPrice * 100), // it expects the price in cents
          stripeToken: payload.token.id, // testing token, later we would use payload.data.token
          stripeIdempotency: uuid4(), // we use this library to create a unique id
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (result.status === 200) {
        commit("updateCartUI", "success");
        setTimeout(() => commit("clearCart"), 3000);
      }
    } catch (e) {
      console.error(e);
    }
  },
};
