<template>
  <ks-form-field :label="label" :id="id">
    <div class="container">
      <input type="text" class="form-item__input" :value="fileName" disabled />
      <input
        type="file"
        ref="fileInput"
        class="form-item__file"
        :id="id"
        @change="handleFileChange"
      />
      <ks-action @click="handleBrowseClick">Browse</ks-action>
    </div>
  </ks-form-field>
</template>

<script>

export default {
  props: {
    label: String,
    id: String
  },
  data() {
    return {
      fileName: ""
    };
  },
  methods: {
    handleFileChange({ target }) {
      const [file] = target.files;
      this.fileName = file.name;
      this.$emit("change", file);
    },
    handleBrowseClick() {
      this.$refs.fileInput.click();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;

  .form-item__input {
    margin-right: 8px;
  }

  .form-item__file {
    display: none;
  }
}
</style>