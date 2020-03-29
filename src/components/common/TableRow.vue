<template>
  <tr class="table-row">
    <slot />
  </tr>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/color.scss";

.table-row:nth-child(2n) {
  background-color: darken($color-primary, 10%);
}
</style>