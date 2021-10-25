<template>
  <ComponentTest msg="coucou" />
</template>

<script>
import ComponentTest from "./components/ComponentTest.vue";
export default {
  components: {
    ComponentTest,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
