<template>
  <button
    class="action"
    @click="handleClick"
    :class="{ primary, disabled, flat }"
    :disabled="disabled || isWaiting"
  >
    <div class="action-spinner-container" v-if="isWaiting && !flat">
      <ks-spinner />
    </div>
    <div class="action-content">
      <ks-icon class="action-icon" v-if="icon" :icon="icon" />
      <span class="action-text">
        <slot>{{ text }}</slot>
      </span>
    </div>
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
    },
    icon: {
      type: String,
      default: ""
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
@import "@/assets/styles/layout";

.action {
  @include typo-text;
  @include trans-short;

  padding: 1em 2em;
  border: 1px solid $color-accent;
  background-color: transparent;
  color: $color-accent;
  display: inline-block;
  position: relative;
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

  .action-spinner-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: $color-accent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .action-content {
    display: flex;
    align-items: center;

    .action-icon + .action-text {
      margin-left: $spacing-3;
    }
  }
}
</style>
