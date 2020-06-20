<template>
  <div id="app">
    <errors />
    <router-view></router-view>
  </div>
</template>

<script>
import Errors from "@/components/common/Errors";
import { ACTION_AUTHORIZE } from "@/constants";

export default {
  name: "App",
  components: {
    Errors
  },
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
