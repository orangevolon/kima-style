import product from "./product";

export default {
  namespaced: true,
  state: {
    ...product.state
  },
  mutations: {
    ...product.mutations
  },
  actions: {
    ...product.actions
  }
};
