<template>
  <ks-form @submit="handleFormSubmit">
    <ks-form-text v-model="displayName" label="Full Name" :disabled="isWaitingForRegister" />
    <ks-form-text v-model="email" label="Email Address" :disabled="isWaitingForRegister" />
    <ks-form-text
      v-model="password"
      label="Password"
      :disabled="isWaitingForRegister"
      type="password"
    />
    <ks-action primary :isWaiting="isWaitingForRegister">Register</ks-action>
  </ks-form>
</template>

<script>
import { ACTION_REGISTER, WAITER_REGISTER } from "@/constants";

export default {
  data() {
    return {
      displayName: "",
      email: "",
      password: ""
    };
  },
  computed: {
    isWaitingForRegister() {
      return this.$store.getters.isWaiting(WAITER_REGISTER);
    }
  },
  methods: {
    handleFormSubmit() {
      const { displayName, email, password } = this;

      this.$store.dispatch(ACTION_REGISTER, {
        displayName,
        email,
        password
      });
    }
  }
};
</script>