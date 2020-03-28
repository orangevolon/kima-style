<template>
  <section>
    <admin-header title="Products">
      <action-group slot="actions">
        <action @click="handleAddClick" text="Add" primary />
      </action-group>
    </admin-header>
    <waiter :name="WAITER_GET_PRODUCTS">
      <ks-table v-if="products.length" :items="products" :header="productHeaders" />
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
import Table from "@/components/common/Table";

export default {
  components: {
    AdminHeader,
    ActionGroup,
    Action,
    Waiter,
    KsTable: Table
  },
  computed: mapState("admin", {
    products: state =>
      state.products.map(product => ({
        title: product.title,
        description: product.description
      }))
  }),
  methods: {
    handleAddClick() {
      this.$router.push("/admin/products/new");
    }
  },
  created() {
    this.WAITER_GET_PRODUCTS = WAITER_GET_PRODUCTS;
    this.productHeaders = ["Title", "Description"];

    this.$store.dispatch("admin/getProducts");
  }
};
</script>
