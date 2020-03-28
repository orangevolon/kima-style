<template>
  <ul class="errors">
    <li v-for="error in errors" :key="error.uuid" class="error">
      <span class="text">Error: {{error.message}}</span>
      <a href="#" class="close" @click.prevent="handleRemoveError(error)">Dismiss</a>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    errors: state => state.error.errors
  }),
  methods: {
    handleRemoveError(error) {
      this.$store.dispatch("dismissError", error);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/color.scss";

.errors {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0;
  margin: 0;

  .error {
    background-color: $color-accent;
    padding: 1em;
    display: flex;
    border-bottom: 1px solid $color-secondary;

    .text {
      flex: 1;
    }

    .close {
      color: $color-secondary;
    }
  }
}
</style>