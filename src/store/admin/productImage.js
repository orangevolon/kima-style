import firebase from "firebase";
import { v1 as uuidv1 } from "uuid";
import {
  ACTION_GET_PRODUCT_IMAGE,
  ACTION_CREATE_NEW_PRODUCT_IMAGE,
  ACTION_SAVE_PRODUCT_IMAGE,
  ACTION_WAITER_START,
  ACTION_WAITER_END,
  ACTION_HANDLE_ERROR,
  MUTATION_SET_PRODUCT_IMAGE,
  MUTATION_SET_PRODUCT_IMAGE_FIELD,
  WAITER_GET_PRODUCT_IMAGE,
  WAITER_SAVE_PRODUCT_IMAGE,
} from "@/constants";

const state = {
  productImage: {
    id: null,
    title: null,
    file: null,
    url: null,
    uploadDate: null,
  },
};

const mutations = {
  [MUTATION_SET_PRODUCT_IMAGE](state, payload) {
    state.productImage = payload;
  },
  [MUTATION_SET_PRODUCT_IMAGE_FIELD](state, payload) {
    for (const field in payload) {
      state.productImage[field] = payload[field];
    }
  },
};

const actions = {
  async [ACTION_GET_PRODUCT_IMAGE]({ commit, dispatch }, { productId, id }) {
    try {
      dispatch(ACTION_WAITER_START, WAITER_GET_PRODUCT_IMAGE, { root: true });

      const url = `/products/${productId}/images/${id}`;
      const snap = await firebase
        .firestore()
        .doc(url)
        .get();

      const image = {
        ...snap.data(),
        id: snap.id,
      };

      commit(MUTATION_SET_PRODUCT_IMAGE, image);
    } catch (error) {
      dispatch();
    } finally {
      dispatch(ACTION_WAITER_END, WAITER_GET_PRODUCT_IMAGE, { root: true });
    }
  },
  async [ACTION_CREATE_NEW_PRODUCT_IMAGE]({ commit, dispatch }) {
    try {
      const newImage = {
        title: "",
        uploadDate: null,
        url: null,
      };

      commit(MUTATION_SET_PRODUCT_IMAGE, newImage);
    } catch (error) {
      dispatch(ACTION_HANDLE_ERROR, error, { root: true });
    }
  },
  async [ACTION_SAVE_PRODUCT_IMAGE]({ commit, dispatch, state }) {
    try {
      dispatch(ACTION_WAITER_START, WAITER_SAVE_PRODUCT_IMAGE, { root: true });

      const imageId = uuidv1();

      const snapshot = await firebase
        .storage()
        .ref(`product-images/${imageId}`)
        .put(state.productImage.file);

      const url = await snapshot.ref.getDownloadURL();

      const collectionUrl = `/products/${state.product.id}/images`;

      const { id } = await firebase
        .firestore()
        .collection(collectionUrl)
        .add({
          title: state.productImage.title,
          url,
        });

      commit(MUTATION_SET_PRODUCT_IMAGE_FIELD, { url, id });
    } catch (error) {
      dispatch(ACTION_HANDLE_ERROR, error, { root: true });
    } finally {
      dispatch(ACTION_WAITER_END, WAITER_SAVE_PRODUCT_IMAGE, { root: true });
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
