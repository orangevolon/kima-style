const state = {
  waiters: []
};

const mutations = {
  addWaiter(state, payload) {
    state.waiters.push(payload);
  },
  removeWaiter(state, payload) {
    state.waiters = state.waiters.filter(waiter => waiter !== payload);
  }
};

const actions = {
  startWaiter({ commit, dispatch }, payload) {
    try {
      commit("addWaiter", payload);
    } catch (error) {
      dispatch("handleError", error);
    }
  },
  endWaiter({ commit, dispatch }, payload) {
    try {
      commit("removeWaiter", payload);
    } catch (error) {
      dispatch("handleError", error);
    }
  }
};

const getters = {
  isWaiting: state => name => state.waiters.includes(name)
};

export default {
  state,
  mutations,
  actions,
  getters
};
