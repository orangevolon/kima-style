<template>
  <header class="app-header">
    <ks-icon icon="bars" />
    <app-nav class="app-header-section" />
    <logo class="app-header-section" />
    <app-auth class="app-header-section" />
  </header>
</template>

<script>
import AppNav from "./AppNav";
import AppAuth from "./AppAuth";
import Logo from "@/components/common/Logo";
import KsIcon from "@/components/common/Icon";

export default {
  components: {
    AppNav,
    AppAuth,
    Logo,
    KsIcon
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