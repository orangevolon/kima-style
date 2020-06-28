<template>
  <section>
    <admin-header title="Product Image">
      <ks-action-group slot="actions">
        <ks-action @click="handleDiscardClick">Discard</ks-action>
        <ks-action @click="handleSaveClick" primary :isWaiting="waitForSaveImage">Save</ks-action>
      </ks-action-group>
    </admin-header>
    <admin-product-image />
  </section>
</template>

<script>
import AdminHeader from "@/components/layout/AdminHeader";
import AdminProductImage from "@/components/product/AdminProductImage";
import {
  ACTION_GET_PRODUCT_IMAGE,
  ACTION_CREATE_NEW_PRODUCT_IMAGE,
  ACTION_SAVE_PRODUCT_IMAGE,
  WAITER_SAVE_PRODUCT_IMAGE
} from "@/constants";

export default {
  components: {
    AdminHeader,
    AdminProductImage
  },
  props: {
    id: String,
    productId: String
  },
  computed: {
    waitForSaveImage() {
      return this.$store.getters.isWaiting(WAITER_SAVE_PRODUCT_IMAGE);
    }
  },
  methods: {
    handleSaveClick() {
      this.$store.dispatch(`admin/${ACTION_SAVE_PRODUCT_IMAGE}`);
    },
    handleDiscardClick() {
      this.$router.push(`/admin/products/${this.productId}/images`);
    }
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