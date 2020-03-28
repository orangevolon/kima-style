<template>
  <section>
    <admin-header title="Products">
      <action-group slot="actions">
        <action @click="handleAddClick" text="Add" primary />
      </action-group>
    </admin-header>
    <waiter :name="WAITER_GET_PRODUCTS">
      <ul v-if="products">
        <li
          v-for="product in products"
          :key="product.id"
        >{{product.title}} - {{product.description}}</li>
      </ul>
      <p v-else>No Products</p>
    </waiter>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { WAITER_GET_PRODUCTS } from "@/constants";
import AdminHeader from "@/components/layout/AdminHeader";
import Action from "@/components/common/Action";
import ActionGroup from "@/components/common/ActionGroup";
import Waiter from "@/components/common/Waiter";

export default {
  components: {
    AdminHeader,
    ActionGroup,
    Action,
    Waiter
  },
  computed: mapState("admin", {
    products: state => state.products
  }),
  methods: {
    handleAddClick() {
      this.$router.push("/admin/products/new");
    }
  },
  created() {
    this.WAITER_GET_PRODUCTS = WAITER_GET_PRODUCTS;

    this.$store.dispatch("admin/getProducts");
  }
};
</script>
