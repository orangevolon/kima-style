<template>
  <font-awesome-icon icon="spinner" :size="size" pulse />
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(faSpinner);

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    size: {
      type: String,
      default: "lg"
    }
  }
};
</script>