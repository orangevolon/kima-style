<template>
  <div class="action-group">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.action-group {
  padding: 8px;

  .action {
    margin-right: 8px;
  }

  .action:last-child {
    margin-right: 0;
  }
}
</style>
