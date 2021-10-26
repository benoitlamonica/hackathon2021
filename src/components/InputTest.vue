<template>
  <input v-model="inputModel" @blur="updateStoreName(inputModel)" type="text" />
  <p><strong>Result</strong> : {{ result }}</p>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const inputModel = ref("Placeholder");
    const store = useStore();

    const result = computed(() => {
      return store.state.name;
    });

    const updateStoreName = (name) => store.commit("changeName", name);

    return {
      inputModel,
      updateStoreName,
      result,
    };
  },
};
</script>

<style></style>
