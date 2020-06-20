<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/admin">Admin</router-link>
    </nav>
    <div v-if="isLoggedIn">
      <span>{{user.displayName || user.email}}</span>
      <action @click="handleLogoutClick" flat>Logout</action>
    </div>
    <div v-else>
      <router-link to="/login">Login</router-link>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import { ACTION_LOGOUT } from "@/constants";
import Action from "@/components/common/Action";

export default {
  components: {
    Action
  },
  computed: mapGetters(["isLoggedIn", "user"]),
  methods: {
    handleLogoutClick() {
      this.$store.dispatch(ACTION_LOGOUT);
    }
  }
};
</script>
