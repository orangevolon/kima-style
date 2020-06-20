<template>
  <ks-form @submit="handleFormSubmit">
    <ks-form-text v-model="email" label="Email" :disabled="isWaitingForLogin" />
    <ks-form-text v-model="password" label="Password" :disabled="isWaitingForLogin" type="password" />
    <ks-action primary :isWaiting="isWaitingForLogin">Login</ks-action>
  </ks-form>
</template>

<script>
import { WAITER_LOGIN, ACTION_LOGIN } from "@/constants";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    isWaitingForLogin() {
      return this.$store.getters.isWaiting(WAITER_LOGIN);
    }
  },
  methods: {
    handleFormSubmit() {
      const { email, password } = this;

      this.$store.dispatch(ACTION_LOGIN, {
        email,
        password
      });
    }
  }
};
</script>