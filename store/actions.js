import axios from "axios";
export default {
  addToCart({ commit }, payload) {
    commit("addToCart", payload);
  },
  async postStripeFunction({ commit, state, getters }, payload) {
    var order = state.order;
    try {
      commit("updateCartUI", "loading");
      var result = await axios.post(
        "https://heuristic-stonebraker-e3023a.netlify.app/.netlify/functions/index",
        {
          stripeEmail: order.email,
          stripeAmt: Math.floor(getters.cartPrice * 100), // it expects the price in cents
          stripeToken: payload.token.id, // testing token, later we would use payload.data.token
          stripeIdempotency: order.uuid, // we use this library to create a unique id
          customerName: `${order.firstName} ${order.lastName}`,
          customerPhoneNumber: order.phoneNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (result.status === 200) {
        commit("updateCartUI", "success");
      }
    } catch (e) {
      commit("updateCartUI", "error");
    }
  },
  resetOrder({ commit }) {
    commit("setOrder");
    commit("clearCart");
    commit("updateCartUI", "idle");
  },
};
