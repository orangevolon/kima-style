<template>
  <ks-form @submit="handleFormSubmit">
    <form-text v-model="displayName" label="Full Name" :disabled="isWaitingForRegister" />
    <form-text v-model="email" label="Email Address" :disabled="isWaitingForRegister" />
    <form-text
      v-model="password"
      label="Password"
      :disabled="isWaitingForRegister"
      type="password"
    />
    <action primary :isWaiting="isWaitingForRegister">Register</action>
  </ks-form>
</template>

<script>
import KsForm from "@/components/form/Form";
import FormText from "@/components/form/FormText";
import Action from "@/components/common/Action";
import { ACTION_REGISTER, WAITER_REGISTER } from "@/constants";

export default {
  components: {
    KsForm,
    FormText,
    Action
  },
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