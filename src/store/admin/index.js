import products from "./products";

export default {
  namespaced: true,
  state: {
    ...products.state
  },
  mutations: {
    ...products.mutations
  },
  actions: {
    ...products.actions
  }
};
