import firebase from "firebase";
import { MUTATION_LOGIN, ACTION_LOGIN, WAITER_LOGIN } from "@/constants";

const mutations = {
  [MUTATION_LOGIN](state, user) {
    const { uid, displayName, email, photoURL } = user;
    state.user = { uid, displayName, email, photoURL };
  },
};

const actions = {
  async [ACTION_LOGIN]({ commit, dispatch }, { email, password }) {
    try {
      dispatch("startWaiter", WAITER_LOGIN);

      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

    console.log(user);

      commit(MUTATION_LOGIN, user);
    } catch (error) {
      dispatch("handleError", error);
    } finally {
      dispatch("endWaiter", WAITER_LOGIN);
    }
  },
};

export default {
  mutations,
  actions,
};
