// layouts
import AdminLayout from "@/components/layout/AdminLayout";
import AppLayout from "@/components/layout/AppLayout";

// admin pages
import AdminHome from "@/pages/admin/AdminHome";
import AdminProducts from "@/pages/admin/AdminProducts";
import AdminProduct from "@/pages/admin/AdminProduct";
import AdminProductImages from "@/pages/admin/AdminProductImages";
import AdminProductImage from "@/pages/admin/AdminProductImage";

// pages
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Products from "@/pages/Products";

export default [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "login",
        component: Login,
      },
      {
        path: "register",
        component: Register,
      },
      {
        path: "products",
        component: Products,
      },
    ],
  },
  {
    path: "/admin",
    component: AdminLayout,
    meta: {
      roles: ["admin"],
    },
    children: [
      {
        path: "",
        component: AdminHome,
      },
      {
        path: "products",
        component: AdminProducts,
      },
      {
        path: "products/:id",
        component: AdminProduct,
        props: true,
      },
      {
        path: "products/:productId/images",
        component: AdminProductImages,
        props: true,
      },
      {
        path: "products/:productId/images/:id",
        component: AdminProductImage,
        props: true,
      },
    ],
  },
];
