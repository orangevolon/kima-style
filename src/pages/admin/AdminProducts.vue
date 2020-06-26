<template>
  <section>
    <admin-header title="Products">
      <ks-action-group slot="actions">
        <ks-action @click="handleAddClick" text="Add" primary />
      </ks-action-group>
    </admin-header>
    <admin-products />
  </section>
</template>

<script>
import AdminHeader from "@/components/layout/AdminHeader";
import AdminProducts from "@/components/product/AdminProducts";

export default {
  components: {
    AdminHeader,
    AdminProducts
  },
  methods: {
    handleAddClick() {
      this.$router.push("/admin/products/new");
    }
  },
  created() {
    this.$store.dispatch("admin/getProducts");
  }
};
</script>