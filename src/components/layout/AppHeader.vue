<template>
  <header class="app-header">
    <app-nav class="app-header-section" />
    <ks-logo class="app-header-section" />
    <app-auth class="app-header-section" />
  </header>
</template>

<script>
import AppNav from "./AppNav";
import AppAuth from "./AppAuth";

export default {
  components: {
    AppNav,
    AppAuth,
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/color";
@import "@/assets/styles/layout";

.app-header {
  @include wrapper;

  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $color-secondary;

  .app-header-section {
    flex: 1;
  }
}
</style>