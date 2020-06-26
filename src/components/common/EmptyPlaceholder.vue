<template>
  <div class="empty-placeholder">
    <p class="empty-placeholder-text">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Empty"
    }
  }
};
</script>

<style lang="scss" scoped>
.empty-placeholder {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  .empty-placeholder-text {
    opacity: 0.5;
  }
}
</style>