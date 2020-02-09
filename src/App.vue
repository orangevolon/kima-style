<template>
  <div id="app">
    <h1>Kima/Style</h1>
    <p>Hand crafted, unique bracelets.</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    testState() {
      return this.$store.state.testState;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
