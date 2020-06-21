<template>
  <font-awesome-icon :icon="icon" :size="size" />
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faTimes);

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    icon: String,
    size: {
      type: String,
      default: "lg"
    }
  }
};
</script>