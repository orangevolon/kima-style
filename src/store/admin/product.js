import firebase from "firebase";
import { WAITER_GET_PRODUCT } from "@/constants";

const state = {
  product: {
    id: null,
    title: null,
    description: null,
    images: []
  }
};

const mutations = {
  setProduct(state, product) {
    state.product = product;
  },
  setProductField(state, { field, value }) {
    state.product[field] = value;
  },
  addProductImage(state, image) {
    state.product.images.push(image);
  },
  removeProductImage(state, id) {
    state.product.images = state.images.filter(image => image.id !== id);
  }
};

const actions = {
  newProduct({ commit }) {
    commit("setProduct", {
      title: "",
      description: "",
      image: null
    });
  },
  async getProduct({ commit, dispatch }, payload) {
    try {
      dispatch("startWaiter", WAITER_GET_PRODUCT, { root: true });

      const snapshot = await firebase
        .firestore()
        .collection("products")
        .doc(payload)
        .get();

      const product = {
        ...snapshot.data(),
        id: snapshot.id
      };

      commit("setProduct", product);
    } catch (error) {
      dispatch("handleError", error, { root: true });
    } finally {
      dispatch("endWaiter", WAITER_GET_PRODUCT, { root: true });
    }
  }
};

export default {
  state,
  mutations,
  actions
};
