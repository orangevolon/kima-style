import Vue from "vue";
import Vuex from "vuex";

// modules
import error from "./error";
import waiter from "./waiter";
import auth from "./auth";
import app from "./app";
import admin from "./admin";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    error,
    waiter,
    auth,
    app,
    admin,
  },
});
