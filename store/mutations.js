import Vue from "vue";
export default {
  addToCart(state, payload) {
    var isThere;
    for (let i = 0; i < state.cart.length; i++) {
      const element = state.cart[i];
      if (
        element.uuid === payload.uuid &&
        element.wood === payload.wood &&
        element.dimension === payload.dimension
      ) {
        isThere = element;
        break;
      }
    }
    if (!isThere) state.cart.push(payload);
    else isThere.quantity += payload.quantity;
  },
  removeFromCart(state, payload) {
    var index;
    for (let i = 0; i < state.cart.length; i++) {
      const element = state.cart[i];
      console.log(element);
      if (element === payload) {
        index = i;
        break;
      }
    }
    if (typeof index == "undefined") {
      console.error("No that item in the cart");
    } else {
      Vue.delete(state.cart, index);
    }
  },
};
