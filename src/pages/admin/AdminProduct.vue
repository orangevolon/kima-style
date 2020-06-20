<template>
  <section>
    <admin-header title="Product Details">
      <ks-action-group slot="actions">
        <ks-action text="Discard" @click="handleDiscard" />
        <ks-action text="Save" primary @click="handleSave" :isWaiting="isWaitingForAdd" />
      </ks-action-group>
    </admin-header>
    <ks-waiter :name="WAITER_GET_PRODUCT">
      <ks-form @submit="handleSave">
        <ks-form-text label="Title" :value="product.title" @input="handleTitleChange" />
        <ks-form-text
          label="Description"
          :value="product.description"
          @input="handleDescriptionChange"
        />
      </ks-form>
      <product-images />
    </ks-waiter>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { WAITER_GET_PRODUCT, WAITER_ADD_PRODUCT } from "@/constants";
import AdminHeader from "@/components/layout/AdminHeader";
import ProductImages from "@/components/product/ProductImages";

export default {
  components: {
    AdminHeader,
    ProductImages
  },
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
    handleSave() {
      if (this.id === "new") {
        this.$store.dispatch("admin/addNewProduct", this.product);
      } else {
        this.$store.dispatch("admin/updateProduct", this.product);
      }
    },
    handleDiscard() {
      this.$router.push("/admin/products");
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
