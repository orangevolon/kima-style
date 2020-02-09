<template>
  <section>
    <admin-header>
      <div slot="actions">
        <action :click="handleAddClick" text="Add" />
      </div>
    </admin-header>
    <p>No products yet</p>
  </section>
</template>

<script>
import AdminHeader from "@/components/layout/AdminHeader";
import Action from "@/components/common/Action";

export default {
  components: {
    AdminHeader,
    Action
  }
};
</script>
