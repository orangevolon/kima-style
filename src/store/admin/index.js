import products from "./products";
import product from "./product";
import productImages from "./productImages";
import productImage from "./productImage";

export default {
  namespaced: true,
  state: {
    ...products.state,
    ...product.state,
    ...productImages.state,
    ...productImage.state,
  },
  mutations: {
    ...products.mutations,
    ...product.mutations,
    ...productImages.mutations,
    ...productImage.mutations,
  },
  actions: {
    ...products.actions,
    ...product.actions,
    ...productImages.actions,
    ...productImage.actions,
  },
};
