<template>
  <h1>Setup basique VUE 3</h1>
  <ComponentTest msg="Message" />
  <InputTest />
</template>

<script>
import ComponentTest from "./components/ComponentTest.vue";
import InputTest from "./components/InputTest.vue";
export default {
  components: {
    ComponentTest,
    InputTest,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
