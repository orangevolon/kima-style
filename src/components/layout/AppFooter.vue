<template>
  <footer class="app-footer">
    <div class="app-footer-content">
      <ks-logo />
      <p>Kima Handcrafts</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/color";
@import "@/assets/styles/layout";

.app-footer {
  color: $color-primary;
  background-color: $color-secondary;
  padding-top: $spacing-6;
  padding-bottom: $spacing-6;

  .app-footer-content {
    @include wrapper;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
}
</style>