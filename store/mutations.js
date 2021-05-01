import Vue from "vue";
export default {
  addToCart(state, payload) {
    var isThere;
    for (let i = 0; i < state.cart.length; i++) {
      const element = state.cart[i];
      if (
        element.uuid === payload.uuid &&
        element.wood.woodType === payload.wood.woodType &&
        element.dimension.data.length === payload.dimension.data.length &&
        element.dimension.data.width === payload.dimension.data.width &&
        element.dimension.data.height === payload.dimension.data.height
      ) {
        isThere = element;
        break;
      }
    }
    console.log(isThere);
    if (!isThere) state.cart.push(payload);
    else isThere.quantity += payload.quantity;
    console.log(state.cart.length);
  },
  removeFromCart(state, payload) {
    var index;
    for (let i = 0; i < state.cart.length; i++) {
      const element = state.cart[i];
      if (element === payload) {
        index = i;
        break;
      }
    }
    if (typeof index == "undefined") {
      console.error("No the item in the cart");
    } else {
      Vue.delete(state.cart, index);
    }
  },
  setOrder(state, payload = null) {
    // If payload is not sent, reset order
    state.order = payload;
  },
  clearCart(state) {
    state.cart = [];
    state.cartUIStatus = "idle";
  },
};
