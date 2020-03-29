<template>
  <button
    class="action"
    @click="handleClick"
    :class="{ primary, disabled, flat }"
    :disabled="disabled || isWaiting"
  >
    <span v-if="isWaiting">Waiting...</span>
    <slot v-else>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    flat: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    isWaiting: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
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
  border: 1px solid $color-accent;
  background-color: transparent;
  color: $color-accent;
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.02);
  }

  &.primary {
    background-color: $color-accent;
    color: $color-primary;
  }

  &.flat {
    padding: 0.2em 1em;
    background-color: initial;
    border: initial;
    color: $color-secondary;

    &.primary {
      color: $color-accent;
    }
  }

  &.disabled {
    opacity: 0.5;

    &:hover {
      transform: none;
    }
  }
}
</style>
