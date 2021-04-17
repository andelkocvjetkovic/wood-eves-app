export default {
  cartLength: (state) => {
    return state.cart.reduce((acc, next) => acc + next.quantity, 0);
  },
  cart: (state) => state.cart,
  cartPrice: (state) =>
    state.cart.reduce((acc, next) => acc + next.quantity * next.price, 0),
};
