<template>
  <ks-form @submit="handleFormSubmit">
    <form-text v-model="email" label="Email" :disabled="isWaitingForLogin" />
    <form-text v-model="password" label="Password" :disabled="isWaitingForLogin" type="password" />
    <action primary :isWaiting="isWaitingForLogin">Login</action>
  </ks-form>
</template>

<script>
import KsForm from "@/components/form/Form";
import FormText from "@/components/form/FormText";
import Action from "@/components/common/Action";
import { WAITER_LOGIN, ACTION_LOGIN } from "@/constants";

export default {
  components: {
    KsForm,
    FormText,
    Action
  },
  data() {
    return {
      email: "abstract.stream@gmail.com",
      password: "GuardianAngel"
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