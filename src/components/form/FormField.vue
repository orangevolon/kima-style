<template>
  <div class="form-item">
    <label class="form-item__label" :for="id">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    id: String
  }
};
</script>

<style lang="scss">
.form-item {
  margin: 1rem 0;
  width: 100%;

  .form-item__label {
    display: block;
    margin-bottom: 1em;
  }
}
</style>