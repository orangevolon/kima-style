<template>
  <div>
    <p>Images</p>
    <div v-if="productImage">
      <ks-form>
        <ks-form-text label="Title" :value="productImage.title" @input="handleImageTitleChange" />
        <ks-form-file v-if="!productImage.url" label="Upload Image" @change="handleImageFileChange" />
      </ks-form>
      <img :src="productImage.url" v-if="productImage.url" />
      <ks-action-group>
        <ks-action @click="handleAddImage" primary>Add</ks-action>
        <ks-action @click="handleDiscardAddImage">Discard</ks-action>
      </ks-action-group>
    </div>
    <div v-else>
      <ul v-if="product.images">
        <li v-for="image of product.images" :key="image.id">
          <img :src="image.url" />
        </li>
      </ul>
      <p v-else>No Images</p>
      <ks-action @click="handleNewImage">Add Image</ks-action>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    product: state => state.admin.product,
    productImage: state => state.admin.productImage
  }),
  methods: {
    handleNewImage() {
      this.$store.dispatch("admin/newProductImage");
    },
    handleImageTitleChange(value) {
      this.$store.commit("admin/setProductImageField", {
        field: "title",
        value
      });
    },
    handleImageFileChange(file) {
      this.$store.dispatch("admin/uploadProductImage", file);
    },
    handleAddImage() {
      this.$store.dispatch("admin/addProductImage");
    },
    handleDiscardAddImage() {
      this.$store.commit("admin/setProductImage", null);
    }
  }
};
</script>