<template>
  <nav class="auth-nav" v-if="isLoggedIn">
    <span>{{user.displayName || user.email}}</span>
    <ks-action @click="handleLogoutClick" flat>Logout</ks-action>
  </nav>
  <nav class="auth-nav" v-else>
    <router-link class="auth-nav-link" to="/login">Login</router-link>
    <router-link class="auth-nav-link" to="/register">Register</router-link>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { ACTION_LOGOUT } from "@/constants";

export default {
  computed: mapGetters(["isLoggedIn", "user"]),
  methods: {
    handleLogoutClick() {
      this.$store.dispatch(ACTION_LOGOUT);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/layout";

.auth-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .auth-nav-link {
    padding: $spacing-3;
  }
}
</style>