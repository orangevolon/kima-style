<template>
  <ks-section title="Product Images">
    <admin-product-images />
  </ks-section>
</template>

<script>
import AdminProductImages from "@/components/product/AdminProductImages";
import { ACTION_GET_PRODUCT_IMAGES } from "@/constants";

export default {
  props: {
    productId: String
  },
  components: {
    AdminProductImages
  },
  created() {
    this.$store.dispatch(`admin/${ACTION_GET_PRODUCT_IMAGES}`, {
      productId: this.productId
    });
  }
};
</script>