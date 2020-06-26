<template>
  <div class="waiter-container">
    <div v-if="isWaiting" class="waiter-spinner-container">
      <ks-spinner />
    </div>
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

<style lang="scss" scoped>
.waiter-spinner-container {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>