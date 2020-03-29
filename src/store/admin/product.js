import firebase from "firebase";
import { v1 as uuidv1 } from "uuid";
import { WAITER_GET_PRODUCT, WAITER_UPLOAD_PRODUCT_IMAGE } from "@/constants";

const state = {
  product: {
    id: null,
    title: null,
    description: null,
    images: []
  },
  productImage: null
};

const mutations = {
  setProduct(state, product) {
    state.product = product;
  },
  setProductField(state, { field, value }) {
    state.product[field] = value;
  },
  addProductImage(state, image) {
    if (!state.product.images) {
      state.product.images = [];
    }

    state.product.images.push(image);
  },
  removeProductImage(state, id) {
    state.product.images = state.images.filter(image => image.id !== id);
  },
  setProductImage(state, image) {
    state.productImage = image;
  },
  setProductImageField(state, { field, value }) {
    state.productImage[field] = value;
  }
};

const actions = {
  newProduct({ commit }) {
    commit("setProduct", {
      title: "",
      description: ""
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
  },
  newProductImage({ commit }) {
    commit("setProductImage", {
      title: null,
      path: null,
      url: null
    });
  },
  async uploadProductImage({ commit, dispatch }, file) {
    try {
      dispatch("startWaiter", WAITER_UPLOAD_PRODUCT_IMAGE, { root: true });

      const imageId = uuidv1();

      const snapshot = await firebase
        .storage()
        .ref(`product-images/${imageId}`)
        .put(file);

      const url = await snapshot.ref.getDownloadURL();

      commit("setProductImageField", {
        field: "path",
        value: snapshot.fullPath
      });
      commit("setProductImageField", { field: "url", value: url });
    } catch (error) {
      dispatch("handleError", error, { root: true });
    } finally {
      dispatch("endWaiter", WAITER_UPLOAD_PRODUCT_IMAGE, { root: true });
    }
  }
};

export default {
  state,
  mutations,
  actions
};
