<template>
  <p @click="increment">
    {{ capitaliseFirstLetter(msg) }} et l'increment : {{ i }}
  </p>
</template>

<script>
import { ref } from "@vue/reactivity";
import capitaliseFirstLetter from "../filters/capitalise-first-letter";

export default {
  props: {
    msg: {
      type: String,
    },
  },

  mixins: [capitaliseFirstLetter],

  setup() {
    const i = ref(0);

    const increment = () => {
      i.value++;
    };

    return {
      i,
      increment,
    };
  },
};
</script>

<style></style>
