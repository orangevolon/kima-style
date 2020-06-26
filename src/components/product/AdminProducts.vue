<template>
  <ks-waiter :name="WAITER_GET_PRODUCTS">
    <ks-table v-if="products">
      <ks-table-row slot="header">
        <ks-table-cell>Title</ks-table-cell>
        <ks-table-cell>Description</ks-table-cell>
      </ks-table-row>
      <ks-table-row v-for="product in products" :key="product.id">
        <ks-table-cell>{{product.title}}</ks-table-cell>
        <ks-table-cell>{{product.description}}</ks-table-cell>
        <ks-table-cell>
          <ks-action
            @click="handleRemoveClick(product.id)"
            flat
            primary
            :isWaiting="$store.getters.isWaiting(`${WAITER_REMOVE_PRODUCT}/${product.id}`)"
          >Delete</ks-action>
          <ks-action @click="handleEditClick(product.id)" flat>Edit</ks-action>
        </ks-table-cell>
      </ks-table-row>
    </ks-table>
    <p v-else>No Products</p>
  </ks-waiter>
</template>

<script>
import { mapState } from "vuex";
import { WAITER_GET_PRODUCTS, WAITER_REMOVE_PRODUCT } from "@/constants";

export default {
  computed: {
    ...mapState("admin", {
      products: state => state.products
    })
  },
  methods: {
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
  }
};
</script>