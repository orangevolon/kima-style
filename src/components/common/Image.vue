<template>
  <div class="image-container" :style="{padding: `${ratio * 50}% 0`}" @click="handleClick">
    <img class="image" :src="src" :alt="alt" :style="{'object-fit': fit}" />
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    ratio: {
      type: Number,
      default: 1 / 1
    },
    fit: {
      type: String,
      default: "cover"
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.image-container {
  position: relative;
  height: 0;
  width: 100%;

  .image {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
</style>