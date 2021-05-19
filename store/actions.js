export default {
  addToCart({ commit }, payload) {
    commit("addToCart", payload);
  },
  async postStripeFunction({ commit, state, getters }, payload) {
    var order = state.order;
    var data = {
      stripeEmail: order.email,
      stripeAmt: Math.floor(getters.cartPrice * 100), // it expects the price in cents
      stripeToken: payload.token.id, // testing token, later we would use payload.data.token
      stripeIdempotency: order.uuid, // we use this library to create a unique id
      customerName: `${order.firstName} ${order.lastName}`,
      customerPhoneNumber: order.phoneNumber,
    };
    try {
      commit("updateCartUI", "loading");
      var response = await fetch(
        "https://wood-elf.netlify.app/.netlify/functions/index",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        commit("updateCartUI", "success");
      } else {
        throw new Error(response.statusText);
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
