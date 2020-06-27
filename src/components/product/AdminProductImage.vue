<template>
  <ks-form>
    <ks-form-text
      label="Title"
      :value="productImage.title"
      @input="handleTitleChange"
      :disabled="waitForSaveImage"
    />
    <ks-form-file
      v-if="!productImage.url"
      label="Upload Image"
      @change="handleImageFileChange"
      :disabled="waitForSaveImage"
    />
    <img class="product-image" :src="productImage.url" v-if="productImage.url" />
    <ks-action-group>
      <ks-action @click="handleAddImage" :isWaiting="waitForSaveImage" primary>Add</ks-action>
      <ks-action @click="handleDiscardAddImage">Discard</ks-action>
    </ks-action-group>
  </ks-form>
</template>

<script>
import { mapState } from "vuex";
import {
  MUTATION_SET_PRODUCT_IMAGE_FIELD,
  ACTION_SAVE_PRODUCT_IMAGE,
  WAITER_SAVE_PRODUCT_IMAGE
} from "@/constants";

export default {
  computed: {
    ...mapState({
      productImage: state => state.admin.productImage
    }),
    waitForSaveImage() {
      return this.$store.getters.isWaiting(WAITER_SAVE_PRODUCT_IMAGE);
    }
  },
  methods: {
    handleTitleChange(title) {
      this.$store.commit(`admin/${MUTATION_SET_PRODUCT_IMAGE_FIELD}`, {
        title
      });
    },
    handleImageFileChange(file) {
      this.$store.commit(`admin/${MUTATION_SET_PRODUCT_IMAGE_FIELD}`, { file });
    },
    handleAddImage() {
      this.$store.dispatch(`admin/${ACTION_SAVE_PRODUCT_IMAGE}`);
    },
    handleDiscardAddImage() {
      this.$store.commit(`admin/${ACTION_SAVE_PRODUCT_IMAGE}`, null);
    }
  }
};
</script>

<style lang="scss" scoped>
.product-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>