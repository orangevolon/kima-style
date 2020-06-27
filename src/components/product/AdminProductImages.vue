<template>
  <ks-waiter :name="WAITER_GET_PRODUCT_IMAGES">
    <ul class="product-images">
      <li v-for="image in productImages" :key="image.id" class="product-image">
        <ks-action flat class="product-image-wrapper" @click="handleImageSelect(image.id)">
          <img class="product-image__img" :src="image.url" :alt="image.title" />
        </ks-action>
      </li>
    </ul>
  </ks-waiter>
</template>

<script>
import { WAITER_GET_PRODUCT_IMAGES } from "@/constants";
import { mapState } from "vuex";

export default {
  computed: mapState({
    productImages: state => state.admin.productImages
  }),
  methods: {
    handleImageSelect(id) {
      const productId = this.$store.state.admin.product.id;
      this.$router.push(`/admin/products/${productId}/images/${id}`);
    }
  },
  created() {
    this.WAITER_GET_PRODUCT_IMAGES = WAITER_GET_PRODUCT_IMAGES;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/layout";

.product-images {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  .product-image {
    flex: 0 1 40%;
    list-style: none;
    margin: $spacing-2;

    .product-image-wrapper {
      height: 0;
      width: 100%;
      padding: 50% 0;
      position: relative;
    }

    .product-image__img {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>