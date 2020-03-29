import firebase from "firebase/app";
import "firebase/firestore";
import {
  WAITER_ADD_PRODUCT,
  WAITER_GET_PRODUCTS,
  WAITER_REMOVE_PRODUCT,
  WAITER_UPDATE_PRODUCT
} from "@/constants";

const state = {
  products: []
};

const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  addProduct(state, payload) {
    state.products.push(payload);
  },
  removeProduct(state, payload) {
    state.products = state.products.filter(product => product.id !== payload);
  },
  updateProduct(state, payload) {
    const targetIdx = state.products.findIndex(
      product => product.id === payload.id
    );
    state.products[targetIdx] = payload;
  }
};

const actions = {
  async addNewProduct({ dispatch, commit }, payload) {
    try {
      dispatch("startWaiter", WAITER_ADD_PRODUCT, { root: true });

      const snapshot = await firebase
        .firestore()
        .collection("products")
        .add(payload);

      commit("addProduct", {
        ...payload,
        id: snapshot.id
      });
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
  async removeProduct({ commit, dispatch }, payload) {
    try {
      dispatch("startWaiter", `${WAITER_REMOVE_PRODUCT}/${payload}`, {
        root: true
      });

      await firebase
        .firestore()
        .collection("products")
        .doc(payload)
        .delete();

      commit("removeProduct", payload);
    } catch (error) {
      dispatch("handleError", error, { root: true });
    } finally {
      dispatch("endWaiter", `${WAITER_REMOVE_PRODUCT}/${payload}`, {
        root: true
      });
    }
  },
  async updateProduct({ commit, dispatch }, payload) {
    try {
      dispatch("startWaiter", WAITER_UPDATE_PRODUCT, { root: true });

      await firebase
        .firestore()
        .collection("products")
        .doc(payload.id)
        .update(payload);

      commit("updateProduct", payload);
    } catch (error) {
      dispatch("handleError", error, { root: true });
    } finally {
      dispatch("endWaiter", WAITER_UPDATE_PRODUCT, { root: true });
    }
  }
};

export default {
  state,
  mutations,
  actions
};
