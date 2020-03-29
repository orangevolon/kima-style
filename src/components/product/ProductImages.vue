<template>
  <div>
    <p>Images</p>
    <div v-if="productImage">
      <ks-form>
        <form-text label="Title" :value="productImage.title" @input="handleImageTitleChange" />
        <form-file v-if="!productImage.url" label="Upload Image" @change="handleImageFileChange" />
      </ks-form>
      <img :src="productImage.url" v-if="productImage.url" />
      <action-group>
        <action @click="handleAddImage" primary>Add</action>
        <action @click="handleDiscardAddImage">Discard</action>
      </action-group>
    </div>
    <div v-else>
      <ul v-if="product.images">
        <li v-for="image of product.images" :key="image.id">
          <img :src="image.url" />
        </li>
      </ul>
      <p v-else>No Images</p>
      <action @click="handleNewImage">Add Image</action>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Action from "@/components/common/Action";
import ActionGroup from "@/components/common/ActionGroup";
import Form from "@/components/form/Form";
import FormText from "@/components/form/FormText";
import FormFile from "@/components/form/FormFile";

export default {
  components: {
    Action,
    ActionGroup,
    KsForm: Form,
    FormText,
    FormFile
  },
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