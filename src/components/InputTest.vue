<template>
  <input v-model="inputModel" type="text" />
  <p><strong>Result</strong> : {{ inputModel }}</p>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const inputModel = ref("Placeholder");
    return {
      inputModel,
    };
  },
};
</script>

<style></style>
