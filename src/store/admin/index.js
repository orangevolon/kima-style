import products from "./products";
import product from "./product";

export default {
  namespaced: true,
  state: {
    ...products.state,
    ...product.state
  },
  mutations: {
    ...products.mutations,
    ...product.mutations
  },
  actions: {
    ...products.actions,
    ...product.actions
  }
};
