<template>
  <table class="table">
    <thead v-if="header" class="table-header">
      <th v-for="cell in header" :key="cell" class="table-cell">{{cell}}</th>
    </thead>
    <tr v-for="item in items" :key="item.id" class="table-row">
      <td v-for="cell in item" :key="cell" class="table-cell">{{cell}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    header: {
      type: Array,
      default: null
    },
    items: {
      type: Array,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/color.scss";

.table {
  width: 100%;
  border-spacing: 0;

  .table-header {
    border-bottom: 1px solid $color-secondary;
  }

  .table-row:nth-child(2n) {
    background-color: darken($color-primary, 10%);
  }

  .table-cell {
    padding: 1em;
  }
}
</style>