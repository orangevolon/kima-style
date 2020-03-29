<template>
  <section>
    <admin-header title="Product Details">
      <action-group slot="actions">
        <action text="Discard" @click="handleDiscard" />
        <action text="Save" primary @click="handleSave" :isWaiting="isWaitingForAdd" />
      </action-group>
    </admin-header>
    <waiter :name="WAITER_GET_PRODUCT">
      <ks-form @submit="handleSave">
        <form-text label="Title" :value="product.title" @input="handleTitleChange" />
        <form-text
          label="Description"
          :value="product.description"
          @input="handleDescriptionChange"
        />
      </ks-form>
    </waiter>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { WAITER_GET_PRODUCT, WAITER_ADD_PRODUCT } from "@/constants";
import Waiter from "@/components/common/Waiter";
import KsForm from "@/components/form/Form";
import FormText from "@/components/form/FormText";
import ActionGroup from "@/components/common/ActionGroup";
import Action from "@/components/common/Action";
import AdminHeader from "@/components/layout/AdminHeader";

export default {
  components: {
    Waiter,
    KsForm,
    FormText,
    Action,
    AdminHeader,
    ActionGroup
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
