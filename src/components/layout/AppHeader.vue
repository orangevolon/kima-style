<template>
  <header class="app-header">
    <div class="app-header-desktop">
      <app-nav class="app-header-section" />
      <ks-logo class="app-header-section" />
      <app-auth class="app-header-section" />
    </div>
    <div class="app-header-mobile">
      <ks-action icon="bars" flat @click="handleBarsClick" />
      <ks-logo class="app-header-section" />
    </div>
    <app-header-drawer :isOpen="isDrawerOpen" @close="handleCloseClick" />
  </header>
</template>

<script>
import AppNav from "./AppNav";
import AppAuth from "./AppAuth";
import AppHeaderDrawer from "./AppHeaderDrawer";

export default {
  components: {
    AppNav,
    AppAuth,
    AppHeaderDrawer
  },
  data() {
    return {
      isDrawerOpen: false
    };
  },
  methods: {
    handleBarsClick() {
      this.isDrawerOpen = true;
    },
    handleCloseClick() {
      this.isDrawerOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/color";
@import "@/assets/styles/layout";

.app-header {
  @include wrapper;

  width: 100%;
  border-bottom: 1px solid $color-secondary;

  .app-header-desktop {
    display: flex;
    align-items: center;
  }

  .app-header-section {
    flex: 1;
  }
}

@include tablet-and-desktop {
  .app-header {
    .app-header-desktop {
      display: flex;
    }

    .app-header-mobile {
      display: none;
    }
  }
}

@include mobile-only {
  .app-header {
    .app-header-desktop {
      display: none;
    }

    .app-header-mobile {
      display: flex;
    }
  }
}
</style>