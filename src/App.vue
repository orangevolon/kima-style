<template>
  <div id="app">
    <errors />
    <router-view></router-view>
  </div>
</template>

<script>
import Errors from "@/components/common/Errors";

export default {
  name: "App",
  components: {
    Errors
  }
};
</script>

<style lang="scss" src="./App.scss"></style>
