<template>
  <div>
    <h1>Admin Panel</h1>
    <admin-nav />
    <router-view></router-view>
  </div>
</template>

<script>
import AdminNav from "./AdminNav";

export default {
  components: {
    AdminNav
  }
};
</script>
