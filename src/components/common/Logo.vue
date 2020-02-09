<template>
  <h1 class="logo">Kima/Style</h1>
</template>

<style lang="scss">
@import "@/assets/styles/typography";
@import "@/assets/styles/color";

.logo {
  @include typo-title(1);

  color: $color-burnt-sienna;
  padding: 1rem;
}
</style>
