import firebase from "firebase/app";
import "firebase/firestore";
import { WAITER_ADD_PRODUCT } from "@/constants";

const state = {
  selectedProduct: null,
  products: null
};

const mutations = {
  setSelectedProduct(state, payload) {
    state.selectedProduct = payload;
  },
  setSelectedProductTitle(state, payload) {
    state.selectedProduct.title = payload;
  },
  setSelectedProductDescription(state, payload) {
    state.selectedProduct.description = payload;
  },
  setProducts(state, payload) {
    state.products = payload;
  }
};

const actions = {
  // selected product
  createNewProduct({ commit }) {
    commit("setSelectedProduct", {
      title: "",
      description: "",
      image: null
    });
  },
  async addNewProduct({ state, dispatch }) {
    console.log("adding new product");
    try {
      dispatch("startWaiter", WAITER_ADD_PRODUCT, { root: true });

      await firebase
        .firestore()
        .collection("products")
        .add(state.selectedProduct);
    } catch (error) {
      dispatch("handleError", error, { root: true });
    } finally {
      dispatch("endWaiter", WAITER_ADD_PRODUCT, { root: true });
    }
  },
  getProducts() {},
  getProduct() {},
  removeProduct() {},
  updateProduct() {}
};

export default {
  state,
  mutations,
  actions
};
