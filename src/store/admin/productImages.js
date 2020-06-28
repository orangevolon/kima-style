import firebase from "firebase";
import {
  MUTATION_SET_PRODUCT_IMAGES,
  MUTATION_DELETE_PRODUCT_IMAGE,
  ACTION_GET_PRODUCT_IMAGES,
  ACTION_HANDLE_ERROR,
  ACTION_WAITER_END,
  ACTION_DELETE_PRODUCT_IMAGE,
  ACTION_WAITER_START,
  WAITER_GET_PRODUCT_IMAGES,
  WAITER_DELETE_PRODUCT_IMAGE,
} from "@/constants";

const state = {
  productImages: [],
};

const mutations = {
  [MUTATION_SET_PRODUCT_IMAGES](state, payload) {
    state.productImages = payload;
  },
  [MUTATION_DELETE_PRODUCT_IMAGE](state, payload) {
    state.productImages = state.productImages.filter(
      ({ id }) => id !== payload
    );
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
  async [ACTION_DELETE_PRODUCT_IMAGE]({ dispatch, commit }, { productId, id }) {
    try {
      dispatch(ACTION_WAITER_START, WAITER_DELETE_PRODUCT_IMAGE, {
        root: true,
      });

      const url = `/products/${productId}/images/${id}`;
      await firebase
        .firestore()
        .doc(url)
        .delete();

      commit(MUTATION_DELETE_PRODUCT_IMAGE, id);
    } catch (error) {
      dispatch(ACTION_HANDLE_ERROR, error, { root: true });
    } finally {
      dispatch(ACTION_WAITER_END, WAITER_DELETE_PRODUCT_IMAGE, { root: true });
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
