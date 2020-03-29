<template>
  <section>
    <admin-header title="Products">
      <action-group slot="actions">
        <action @click="handleAddClick" text="Add" primary />
      </action-group>
    </admin-header>
    <waiter :name="WAITER_GET_PRODUCTS">
      <ks-table v-if="products">
        <ks-table-row slot="header">
          <ks-table-cell>Title</ks-table-cell>
          <ks-table-cell>Description</ks-table-cell>
        </ks-table-row>
        <ks-table-row v-for="product in products" :key="product.id">
          <ks-table-cell>{{product.title}}</ks-table-cell>
          <ks-table-cell>{{product.description}}</ks-table-cell>
          <ks-table-cell>
            <action
              @click="handleRemoveClick(product.id)"
              flat
              primary
              :isWaiting="$store.getters.isWaiting(`${WAITER_REMOVE_PRODUCT}/${product.id}`)"
            >Delete</action>
            <action @click="handleEditClick(product.id)" flat>Edit</action>
          </ks-table-cell>
        </ks-table-row>
      </ks-table>
      <p v-else>No Products</p>
    </waiter>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { WAITER_GET_PRODUCTS, WAITER_REMOVE_PRODUCT } from "@/constants";
import AdminHeader from "@/components/layout/AdminHeader";
import Action from "@/components/common/Action";
import ActionGroup from "@/components/common/ActionGroup";
import Waiter from "@/components/common/Waiter";
import Table from "@/components/common/Table";
import TableRow from "@/components/common/TableRow";
import TableCell from "@/components/common/TableCell";

export default {
  components: {
    AdminHeader,
    ActionGroup,
    Action,
    Waiter,
    KsTable: Table,
    KsTableRow: TableRow,
    KsTableCell: TableCell
  },
  computed: {
    ...mapState("admin", {
      products: state => state.products
    })
  },
  methods: {
    handleAddClick() {
      this.$router.push("/admin/products/new");
    },
    handleEditClick(id) {
      this.$router.push(`/admin/products/${id}`);
    },
    handleRemoveClick(id) {
      this.$store.dispatch("admin/removeProduct", id);
    }
  },
  created() {
    this.WAITER_GET_PRODUCTS = WAITER_GET_PRODUCTS;
    this.WAITER_REMOVE_PRODUCT = WAITER_REMOVE_PRODUCT;

    this.$store.dispatch("admin/getProducts");
  }
};
</script>