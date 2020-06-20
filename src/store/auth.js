import firebase from "firebase";
import {
  MUTATION_LOGIN,
  MUTATION_LOGOUT,
  ACTION_LOGIN,
  ACTION_LOGOUT,
  ACTION_AUTHORIZE,
  WAITER_LOGIN,
  WAITER_LOGOUT,
  WAITER_AUTHORIZE,
} from "@/constants";

const state = {
  user: {},
};

const mutations = {
  [MUTATION_LOGIN](state, user) {
    state.user = user;
  },
  [MUTATION_LOGOUT](state) {
    state.user = {};
  },
};

const actions = {
  async [ACTION_LOGIN]({ dispatch }, { email, password }) {
    try {
      dispatch("startWaiter", WAITER_LOGIN);
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      dispatch("handleError", error);
    } finally {
      dispatch("endWaiter", WAITER_LOGIN);
    }
  },
  async [ACTION_AUTHORIZE]({ commit, dispatch }) {
    try {
      dispatch("startWaiter", WAITER_AUTHORIZE);

      const unsubscribe = firebase.auth().onAuthStateChanged(
        async (user) => {
          if (user) {
            const {
              claims,
            } = await firebase.auth().currentUser.getIdTokenResult();

            const userProfile = {
              uid: user.uid,
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              role: claims.role,
            };
            commit(MUTATION_LOGIN, userProfile);
          } else {
            commit(MUTATION_LOGOUT);
          }
        },
        (error) => {
          dispatch("handleError", error);
        }
      );

      return unsubscribe;
    } catch (error) {
      dispatch("handleError", error);
    } finally {
      dispatch("endWaiter", WAITER_AUTHORIZE);
    }
  },
  async [ACTION_LOGOUT]({ dispatch }) {
    try {
      dispatch("startWaiter", WAITER_LOGOUT);
      await firebase.auth().signOut();
    } catch (error) {
      dispatch("handleError", error);
    } finally {
      dispatch("endWaiter", WAITER_LOGOUT);
    }
  },
};

const getters = {
  isLoggedIn: (state) => "uid" in state.user,
  user: (state) => state.user,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
