import firebase from "firebase/app";
import "firebase/firestore";
import {
  WAITER_ADD_PRODUCT,
  WAITER_GET_PRODUCTS,
  WAITER_GET_PRODUCT
} from "@/constants";

const state = {
  selectedProduct: null,
  products: []
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
  async getProducts({ commit, dispatch }) {
    try {
      dispatch("startWaiter", WAITER_GET_PRODUCTS, { root: true });

      const snapshot = await firebase
        .firestore()
        .collection("products")
        .get();

      const products = [];

      snapshot.forEach(doc => {
        products.push({
          ...doc.data(),
          id: doc.id
        });
      });

      commit("setProducts", products);
    } catch (error) {
      dispatch("handleError", error, { root: true });
    } finally {
      dispatch("endWaiter", WAITER_GET_PRODUCTS, { root: true });
    }
  },
  async getProduct({ commit, dispatch }, payload) {
    try {
      dispatch("startWaiter", WAITER_GET_PRODUCT, { root: true });

      const snapshot = await firebase
        .firestore()
        .collection("products")
        .doc(payload)
        .get();

      const product = snapshot.data();

      commit("setSelectedProduct", product);
    } catch (error) {
      dispatch("handleError", error, { root: true });
    } finally {
      dispatch("endWaiter", WAITER_GET_PRODUCT, { root: true });
    }
  },
  removeProduct() {},
  updateProduct() {}
};

export default {
  state,
  mutations,
  actions
};
