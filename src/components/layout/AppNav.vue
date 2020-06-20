<template>
  <nav class="app-nav">
    <router-link class="app-nav-link" to="/">Home</router-link>
    <router-link class="app-nav-link" to="/products">Products</router-link>
    <router-link class="app-nav-link" to="/admin">Admin</router-link>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/layout";

.app-nav {
  display: flex;

  .app-nav-link {
    padding: $spacing-3;
  }
}
</style>
