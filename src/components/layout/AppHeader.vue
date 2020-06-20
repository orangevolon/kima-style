<template>
  <header class="app-header">
    <app-nav />
    <logo />
    <nav v-if="isLoggedIn">
      <span>{{user.displayName || user.email}}</span>
      <action @click="handleLogoutClick" flat>Logout</action>
    </nav>
    <nav v-else>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import { ACTION_LOGOUT } from "@/constants";
import Action from "@/components/common/Action";
import AppNav from "./AppNav";
import Logo from "@/components/common/Logo";

export default {
  components: {
    AppNav,
    Action,
    Logo
  },
  computed: mapGetters(["isLoggedIn", "user"]),
  methods: {
    handleLogoutClick() {
      this.$store.dispatch(ACTION_LOGOUT);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/color";

.app-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $color-secondary;
}
</style>