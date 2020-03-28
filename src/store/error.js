import { v1 as uuidv1 } from "uuid";

const state = {
  errors: []
};

const mutations = {
  addError(state, payload) {
    state.errors.push(payload);
  },
  removeError(state, payload) {
    state.errors = state.errors.filter(error => error !== payload);
  }
};

const actions = {
  handleError({ commit }, payload) {
    if (process.env.NODE_ENV === "development") {
      console.error(payload);
    }

    commit("addError", {
      uid: uuidv1(),
      message: payload.message,
      error: payload
    });
  },
  dismissError({ commit }, payload) {
    commit("removeError", payload);
  }
};

export default {
  state,
  mutations,
  actions
};
