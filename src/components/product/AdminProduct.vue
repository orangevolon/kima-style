<template>
  <ks-waiter :name="WAITER_GET_PRODUCT">
    <ks-section title="Information">
      <ks-form @submit="handleSave">
        <ks-form-text label="Title" :value="product.title" @input="handleTitleChange" />
        <ks-form-text
          label="Description"
          :value="product.description"
          @input="handleDescriptionChange"
        />
      </ks-form>
    </ks-section>
    <ks-section title="Images">
      <ks-action flat icon="plus" slot="actions" @click="handleAddNewImage">Add</ks-action>
      <ks-action flat icon="ellipsis-h" slot="actions" @click="handleSeeAll">See All</ks-action>
      <ul v-if="product.images" class="product-images">
        <li v-for="image in product.images" :key="image.id" class="product-image">
          <img :src="image.src" :alt="image.title" class="product-image__img" />
        </li>
      </ul>
      <ks-empty-placeholder v-else text="No Images to Show" />
    </ks-section>
  </ks-waiter>
</template>

<script>
import { mapState } from "vuex";
import { WAITER_GET_PRODUCT, WAITER_ADD_PRODUCT } from "@/constants";

export default {
  props: {
    id: String
  },
  computed: {
    ...mapState("admin", {
      product: state => state.product
    }),
    isWaitingForAdd() {
      return this.$store.getters.isWaiting(WAITER_ADD_PRODUCT);
    }
  },
  methods: {
    handleTitleChange(value) {
      this.$store.commit("admin/setProductField", { field: "title", value });
    },
    handleDescriptionChange(value) {
      this.$store.commit("admin/setProductField", {
        field: "description",
        value
      });
    },
    handleAddNewImage() {
      this.$router.push(`/admin/products/${this.id}/images/new`);
    },
    handleSave() {
      if (this.id === "new") {
        this.$store.dispatch("admin/addNewProduct", this.product);
      } else {
        this.$store.dispatch("admin/updateProduct", this.product);
      }
    },
    handleDiscard() {
      this.$router.push("/admin/products");
    },
    handleSeeAll() {
      this.$router.push(`/admin/products/${this.id}/images`);
    }
  },
  created() {
    this.WAITER_GET_PRODUCT = WAITER_GET_PRODUCT;

    if (this.id === "new") {
      this.$store.dispatch("admin/newProduct");
    } else {
      this.$store.dispatch("admin/getProduct", this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/layout";

.product-images {
  margin: 0;
  padding: $spacing-4;
  display: flex;

  .product-image {
    flex: 1;

    .product-image__img {
      width: 100%;
    }
  }
}
</style>