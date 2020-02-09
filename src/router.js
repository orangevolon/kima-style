import Vue from "vue";
import VueRouter from "vue-router";

// layouts
import AdminLayout from "@/components/layout/AdminLayout";
import AppLayout from "@/components/layout/AppLayout";

// admin pages
import AdminHome from "@/pages/admin/AdminHome";
import AdminProducts from "@/pages/admin/AdminProducts";

// pages
import Home from "@/pages/Home";
import Products from "@/pages/Products";

const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        component: Home
      },
      {
        path: "products",
        component: Products
      }
    ]
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "",
        component: AdminHome
      },
      {
        path: "products",
        component: AdminProducts
      }
    ]
  }
];

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes
});
