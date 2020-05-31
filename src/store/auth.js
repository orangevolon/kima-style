import firebase from "firebase";
import { MUTATION_LOGIN, ACTION_LOGIN, WAITER_LOGIN } from "@/constants";

const state = {
  user: {},
};

const mutations = {
  [MUTATION_LOGIN](state, user) {
    state.user = user;
  },
};

const actions = {
  async [ACTION_LOGIN]({ commit, dispatch }, { email, password }) {
    try {
      dispatch("startWaiter", WAITER_LOGIN);

      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      const { claims } = await firebase.auth().currentUser.getIdTokenResult();

      const userProfile = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        role: claims.role,
      };

      commit(MUTATION_LOGIN, userProfile);
    } catch (error) {
      dispatch("handleError", error);
    } finally {
      dispatch("endWaiter", WAITER_LOGIN);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
