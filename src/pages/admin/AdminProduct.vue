<template>
  <section>
    <admin-header title="Product Details">
      <action-group slot="actions">
        <action text="Discard" @click="handleDiscard" />
        <action text="Save" primary @click="handleSave" :isWaiting="isWaitingForAdd" />
      </action-group>
    </admin-header>
    <ks-form @submit="handleSave">
      <form-text label="Title" :value="title" @input="handleTitleChange" />
      <form-text label="Description" :value="description" @input="handleDescriptionChange" />
    </ks-form>
  </section>
</template>

<script>
import { mapState } from "vuex";
import KsForm from "@/components/form/Form";
import FormText from "@/components/form/FormText";
import ActionGroup from "@/components/common/ActionGroup";
import Action from "@/components/common/Action";
import AdminHeader from "@/components/layout/AdminHeader";
import { WAITER_ADD_PRODUCT } from "@/constants";

export default {
  components: {
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
      title: state => state.selectedProduct.title,
      description: state => state.selectedProduct.description
    }),
    isWaitingForAdd() {
      return this.$store.getters.isWaiting(WAITER_ADD_PRODUCT);
    }
  },
  methods: {
    handleTitleChange(value) {
      this.$store.commit("admin/setSelectedProductTitle", value);
    },
    handleDescriptionChange(value) {
      this.$store.commit("admin/setSelectedProductDescription", value);
    },
    handleSave() {
      if (this.id === "new") {
        this.$store.dispatch("admin/addNewProduct");
      } else {
        this.$store.dispatch("admin/updateProduct");
      }
    },
    handleDiscard() {
      this.$router.push("/admin/products");
    }
  },
  created() {
    if (this.id === "new") {
      this.$store.dispatch("admin/createNewProduct");
    } else {
      this.$store.dispatch("admin/getProduct", this.id);
    }
  }
};
</script>
