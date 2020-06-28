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
    <ks-image :ratio="1/3" :src="productImage.url" v-if="productImage.url" />
  </ks-form>
</template>

<script>
import { mapState } from "vuex";
import {
  MUTATION_SET_PRODUCT_IMAGE_FIELD,
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
  }
};
</script>