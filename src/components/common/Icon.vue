<template>
  <font-awesome-icon :icon="icon" />
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    icon: String
  }
};
</script>