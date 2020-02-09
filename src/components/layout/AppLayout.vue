<template>
  <div>
    <h1>KimaStyle</h1>
    <app-nav />
    <router-view></router-view>
  </div>
</template>

<script>
import AppNav from "./AppNav";

export default {
  components: {
    AppNav
  }
};
</script>
