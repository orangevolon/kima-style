<template>
  <form @submit="handleSubmit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$emit("submit");
    }
  }
};
</script>
