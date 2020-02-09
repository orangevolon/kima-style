<template>
  <section>
    <admin-header title="Product Details">
      <action-group slot="actions">
        <action text="Discard" @click="handleDiscard" />
        <action text="Save" primary @click="handleSave" />
      </action-group>
    </admin-header>
    <ks-form @submit="handleSave">
      <form-text label="Title" v-model="title" />
      <form-text label="Description" v-model="description" />
    </ks-form>
  </section>
</template>

<script>
import KsForm from "@/components/form/Form";
import FormText from "@/components/form/FormText";
import ActionGroup from "@/components/common/ActionGroup";
import Action from "@/components/common/Action";
import AdminHeader from "@/components/layout/AdminHeader";

export default {
  components: {
    KsForm,
    FormText,
    Action,
    AdminHeader,
    ActionGroup
  },
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    handleSave() {
      console.log("Saving...");
    },
    handleDiscard() {
      this.$router.push("/admin/products");
    }
  }
};
</script>
