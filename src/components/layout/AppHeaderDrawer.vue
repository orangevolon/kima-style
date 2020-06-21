<template>
  <div :class="{'app-header-drawer': true, 'is-open': isOpen}">
    <ks-action icon="times" flat @click="handleCloseClick" />
    <app-nav class="app-nav" />
    <ks-divider />
    <app-auth class="app-auth" />
  </div>
</template>

<script>
import AppNav from "./AppNav";
import AppAuth from "./AppAuth";

export default {
  components: {
    AppNav,
    AppAuth
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleCloseClick() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/color";
@import "@/assets/styles/layout";

.app-header-drawer {
  visibility: hidden;
  position: fixed;
  opacity: 0;
  background-color: $color-primary;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  padding: $spacing-3;
  transition: opacity 250ms ease;

  .app-nav {
    flex-direction: column;
    align-items: center;
    padding: $spacing-4;
  }

  .app-auth {
    flex-direction: column;
    align-items: center;
    padding: $spacing-5;
  }

  &.is-open {
    visibility: visible;
    opacity: 1;
  }
}
</style>