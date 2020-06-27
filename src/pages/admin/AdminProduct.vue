<template>
  <section>
    <admin-header title="Product Details">
      <ks-action-group slot="actions">
        <ks-action text="Discard" @click="handleDiscard" />
        <ks-action text="Save" primary @click="handleSave" :isWaiting="isWaitingForAdd" />
      </ks-action-group>
    </admin-header>
    <admin-product :id="id" />
  </section>
</template>

<script>
import { mapState } from "vuex";
import { WAITER_ADD_PRODUCT } from "@/constants";
import AdminHeader from "@/components/layout/AdminHeader";
import AdminProduct from "@/components/product/AdminProduct";

export default {
  components: {
    AdminHeader,
    AdminProduct
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
  }
};
</script>
