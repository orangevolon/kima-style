<template>
  <section>
    <admin-header title="Products">
      <action-group slot="actions">
        <action @click="handleAddClick" text="Add" primary />
      </action-group>
    </admin-header>
    <p>No products yet</p>
  </section>
</template>

<script>
import AdminHeader from "@/components/layout/AdminHeader";
import Action from "@/components/common/Action";
import ActionGroup from "@/components/common/ActionGroup";

export default {
  components: {
    AdminHeader,
    ActionGroup,
    Action
  },
  methods: {
    handleAddClick() {
      this.$router.push("/admin/products/new");
    }
  }
};
</script>
