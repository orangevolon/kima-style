<template>
  <ks-section title="Product Image">
    <admin-product-image />
  </ks-section>
</template>

<script>
import AdminProductImage from "@/components/product/AdminProductImage";
import {
  ACTION_GET_PRODUCT_IMAGE,
  ACTION_CREATE_NEW_PRODUCT_IMAGE
} from "@/constants";

export default {
  components: {
    AdminProductImage
  },
  props: {
    id: String,
    productId: String
  },
  created() {
    if (this.id === "new") {
      this.$store.dispatch(`admin/${ACTION_CREATE_NEW_PRODUCT_IMAGE}`);
    } else {
      this.$store.dispatch(`admin/${ACTION_GET_PRODUCT_IMAGE}`, {
        id: this.id,
        productId: this.productId
      });
    }
  }
};
</script>