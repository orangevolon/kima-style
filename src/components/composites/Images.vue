<template>
  <ul class="images-container">
    <li v-for="image in images" :key="image.id" class="image-item">
      <div class="image-item-header">
        <p class="image-item-header-title">{{image.title}}</p>
        <ks-action
          class="image-item-header-icon"
          icon="trash"
          @click="handleImageDelete(image.id)"
          flat
        />
        <ks-action
          class="image-item-header-icon"
          icon="edit"
          @click="handleImageEdit(image.id)"
          flat
        />
      </div>
      <ks-image :src="image.url" :alt="image.title" :ratio="imageRatio" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    images: Array,
    imageRatio: Number
  },
  methods: {
    handleImageDelete(id) {
      this.$emit("delete", id);
    },
    handleImageEdit(id) {
      this.$emit("edit", id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/layout";
@import "@/assets/styles/color";

.images-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: $spacing-4;
  border: 1px solid $color-secondary;

  .image-item {
    list-style: none;
    flex: 0 0 20%;
    margin: $spacing-4;

    .image-item-header {
      display: flex;
      align-items: center;

      .image-item-header-title {
        flex: 1;
      }

      .image-item-header-icon {
        flex: 0;
        padding-right: 0;
      }
    }
  }
}
</style>