<template>
  <table class="table">
    <thead class="table-header">
      <slot name="header" />
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/color.scss";

.table {
  width: 100%;
  border-spacing: 0;

  .table-header {
    border-bottom: 1px solid $color-secondary;
  }
}
</style>