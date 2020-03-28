import Vue from "vue";
import Vuex from "vuex";

// modules
import error from "./error";
import app from "./app";
import admin from "./admin";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    error,
    app,
    admin
  }
});
