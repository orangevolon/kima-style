<template>
  <article class="app-layout">
    <app-header class="app-layout-header" />
    <main class="app-layout-main">
      <router-view></router-view>
    </main>
    <app-footer class="app-layout-footer" />
  </article>
</template>

<script>
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/layout";

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .app-layout-main {
    @include wrapper;

    flex: 1;
    padding-top: $spacing-6;
    padding-bottom: $spacing-6;
  }
}
</style>