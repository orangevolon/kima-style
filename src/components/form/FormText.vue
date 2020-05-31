<template>
  <form-field :label="label" :id="id">
    <input class="form-item__input" :id="id" @input="handleValueChange" :value="value" :type="type" />
  </form-field>
</template>

<script>
import FormField from "./FormField";

export default {
  components: {
    FormField
  },
  props: {
    value: String,
    id: String,
    label: String,
    type: String
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
</style>
