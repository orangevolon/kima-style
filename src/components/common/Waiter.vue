<template>
  <div class="container" v-if="isWaiting">Loading...</div>
</template>

<script>
export default {
  props: {
    name: String
  },
  computed: {
    isWaiting() {
      return this.$store.getters("isWaiting", this.props.name);
    }
  }
};
</script>