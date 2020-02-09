<template>
  <header class="admin-header">
    <h2 class="title">{{ title }}</h2>
    <slot name="actions" class="actions" />
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/color";

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $color-secondary;
  padding-bottom: 2rem;

  .title {
    margin: 0;
  }
}
</style>
