<template>
  <p @click="increment">
    {{ capitaliseFirstLetter(msg) }} et l'increment : {{ i }}
  </p>
</template>

<script>
import { ref } from "@vue/reactivity";
import useFilters from "../filters/useFilters";

export default {
  props: {
    msg: {
      type: String,
    },
  },

  setup() {
    const i = ref(0);

    const increment = () => {
      i.value++;
    };

    const { capitaliseFirstLetter } = useFilters();
    return {
      i,
      increment,
      capitaliseFirstLetter,
    };
  },
};
</script>

<style></style>
