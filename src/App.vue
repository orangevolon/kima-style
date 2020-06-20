<template>
  <div id="app">
    <ks-errors />
    <router-view></router-view>
  </div>
</template>

<script>
import { ACTION_AUTHORIZE } from "@/constants";

export default {
  name: "App",
  created() {
    this.authorizeUnsub = this.$store.dispatch(ACTION_AUTHORIZE);
  },
  beforeDestroy() {
    if (this.authorizeUnsub) {
      this.unauthorizeSub();
    }
  }
};
</script>

<style lang="scss" src="./App.scss"></style>
