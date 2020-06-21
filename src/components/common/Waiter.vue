<template>
  <div class="waiter-container">
    <ks-spinner v-if="isWaiting" />
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  computed: {
    isWaiting() {
      return this.$store.getters.isWaiting(this.name);
    }
  }
};
</script>