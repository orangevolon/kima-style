<template>
  <nav class="admin-nav">
    <router-link to="/admin">Home</router-link>
    <router-link to="/admin/products">Products</router-link>
    <router-link to="/admin/categories">Categories</router-link>
    <router-link to="/admin/collections">Collections</router-link>
  </nav>
</template>

<style lang="scss">
.admin-nav {
  display: flex;
  flex-direction: column;

  a {
    padding: 1em;
    text-decoration: none;
  }
}
</style>
