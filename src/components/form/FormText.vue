<template>
  <div class="form-item">
    <label class="form-item__label" :for="id">{{ label }}</label>
    <input
      class="form-item__input"
      :id="id"
      @input="handleValueChange"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    id: String,
    label: String
  },
  methods: {
    handleValueChange(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/color";
@import "@/assets/styles/typography";

.form-item {
  margin: 1rem 0;
  width: 100%;

  .form-item__label {
    display: block;
    margin-bottom: 1em;
  }

  .form-item__input {
    @include typo-text;

    display: block;
    padding: 0.8em 1em;
    border: 1px solid $color-secondary;
    background-color: transparent;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
}
</style>
