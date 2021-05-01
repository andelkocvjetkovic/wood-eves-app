export default {
  cartLength: (state) => {
    return state.cart.reduce((acc, next) => acc + next.quantity, 0);
  },
  cartPrice: (state) =>
    state.cart.reduce((acc, next) => acc + next.quantity * next.price, 0),
  userEmail: (state) => state.order.email,
};
