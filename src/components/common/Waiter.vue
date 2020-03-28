<template>
  <div class="container">
    <p v-if="isWaiting">Loading...</p>
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