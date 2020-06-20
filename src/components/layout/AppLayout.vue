<template>
  <article class="app-layout">
    <app-header />
    <router-view></router-view>
  </article>
</template>

<script>
import AppHeader from "./AppHeader";

export default {
  components: {
    AppHeader
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/layout";

.app-layout {
  max-width: $wrapper-width;
  margin: auto;
}
</style>