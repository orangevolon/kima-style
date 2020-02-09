<template>
  <button class="action" :click="handleClick">
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    text: String
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/typography";
@import "@/assets/styles/color";
@import "@/assets/styles/transition";

.action {
  @include typo-text;
  @include trans-short;

  padding: 1em 2em;
  background-color: $color-accent;
  color: $color-primary;
  border: none;
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: lighten($color-accent, 10%);
    transform: scale(1.02);
  }
}
</style>
