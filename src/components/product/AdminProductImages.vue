<template>
  <ks-waiter :name="WAITER_GET_PRODUCT_IMAGES">
    <images :images="productImages" @delete="handleImageDelete" @edit="handleImageEdit" />
  </ks-waiter>
</template>

<script>
import Images from "@/components/composites/Images";
import {
  WAITER_GET_PRODUCT_IMAGES,
  ACTION_DELETE_PRODUCT_IMAGE
} from "@/constants";
import { mapState } from "vuex";

export default {
  components: {
    Images
  },
  computed: mapState({
    productImages: state => state.admin.productImages
  }),
  methods: {
    handleImageDelete(id) {
      const productId = this.$store.state.admin.product.id;

      this.$store.dispatch(`admin/${ACTION_DELETE_PRODUCT_IMAGE}`, {
        id,
        productId
      });
    },
    handleImageEdit(id) {
      const productId = this.$store.state.admin.product.id;
      this.$router.push(`/admin/products/${productId}/images/${id}`);
    }
  },
  created() {
    this.WAITER_GET_PRODUCT_IMAGES = WAITER_GET_PRODUCT_IMAGES;
  }
};
</script>