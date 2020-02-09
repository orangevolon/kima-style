import Vue from "vue";
import VueRouter from "vue-router";

// pages
import Home from "@/pages/Home";
import Products from "@/pages/Products";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/products",
    component: Products
  }
];

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes
});
