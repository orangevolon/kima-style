<template>
  <section>
    <admin-header title="Product Images">
      <ks-action-group slot="actions">
        <ks-action @click="handleBackClick" text="Back" />
        <ks-action @click="handleAddClick" text="Add New" primary />
      </ks-action-group>
    </admin-header>
    <admin-product-images />
  </section>
</template>

<script>
import AdminHeader from "@/components/layout/AdminHeader";
import AdminProductImages from "@/components/product/AdminProductImages";
import { ACTION_GET_PRODUCT_IMAGES } from "@/constants";

export default {
  components: {
    AdminHeader,
    AdminProductImages
  },
  props: {
    productId: String
  },
  methods: {
    handleAddClick() {
      this.$router.push(`/admin/products/${this.productId}/images/new`);
    },
    handleBackClick() {
      this.$router.push(`/admin/products/${this.productId}`);
    }
  },
  created() {
    this.$store.dispatch(`admin/${ACTION_GET_PRODUCT_IMAGES}`, {
      productId: this.productId
    });
  }
};
</script>