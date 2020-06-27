import firebase from "firebase";
import { MUTATION_SET_PRODUCT_IMAGES } from "@/constants";
import {
  ACTION_GET_PRODUCT_IMAGES,
  ACTION_HANDLE_ERROR,
  ACTION_WAITER_END,
  WAITER_GET_PRODUCT_IMAGES,
  ACTION_WAITER_START,
} from "@/constants";

const state = {
  productImages: [],
};

const mutations = {
  [MUTATION_SET_PRODUCT_IMAGES](state, payload) {
    state.productImages = payload;
  },
};

const actions = {
  async [ACTION_GET_PRODUCT_IMAGES]({ dispatch, commit }, { productId }) {
    try {
      dispatch(ACTION_WAITER_START, WAITER_GET_PRODUCT_IMAGES, { root: true });

      const url = `/products/${productId}/images`;
      const snap = await firebase
        .firestore()
        .collection(url)
        .get();

      const images = [];

      snap.forEach((image) => {
        images.push({
          id: image.id,
          ...image.data(),
        });
      });

      commit(MUTATION_SET_PRODUCT_IMAGES, images);
    } catch (error) {
      dispatch(ACTION_HANDLE_ERROR, error, { root: true });
    } finally {
      dispatch(ACTION_WAITER_END, WAITER_GET_PRODUCT_IMAGES, { root: true });
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
