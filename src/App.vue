<template>
  <GrainedBG>
    <h1>Setup basique VUE 3</h1>
    <InputTest />
  </GrainedBG>
</template>

<script>
import GrainedBG from './components/GrainedBG'
import InputTest from './components/InputTest.vue'

export default {
  components: {
    GrainedBG,
    InputTest
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
