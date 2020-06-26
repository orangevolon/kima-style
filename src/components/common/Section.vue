<template>
  <section>
    <header v-if="title" class="section-header">
      <h3 class="section-header-title">{{title}}</h3>
      <ks-action-group class="section-header-actions">
        <slot name="actions" />
      </ks-action-group>
    </header>
    <main>
      <slot />
    </main>
  </section>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/layout";

.section-header {
  display: flex;
  align-items: center;
  margin-top: $spacing-6;
  margin-bottom: $spacing-4;

  .section-header-title {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
  }

  .section-header-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
