<template>
  <div class="admin-layout">
    <aside>
      <ks-logo />
      <admin-nav />
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AdminNav from "./AdminNav";

export default {
  components: {
    AdminNav,
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/color";

.admin-layout {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 196px auto;
  grid-template-areas: "nav content";

  aside {
    background-color: $color-secondary;
    grid-area: nav;
    grid-area: nav;
    height: 100%;
  }

  main {
    grid-area: content;
    padding: 2rem;
  }
}
</style>
