import axios from "axios";
import { v4 as uuid4 } from "uuid";
const hdrs = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};
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
          stripeEmail: payload.stripeEmail,
          stripeAmt: Math.floor(getters.cartPrice * 100), // it expects the price in cents
          stripeToken: payload.token, // testing token, later we would use payload.data.token
          stripeIdempotency: uuid4(), // we use this library to create a unique id
        },
        {
          headers: {
            "Content-Type": "application/json",
            ...hdrs,
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
