<template>
  <div>
    <input id="userValue" v-model="userValue" type="text" />
    <div id="button" ref="button">
      {{ userValue }}
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const userValue = ref('text')
    const button = ref()

    return {
      button,
      userValue
    }
  }
}
</script>

<style>
#button {
  width: 80px;
  height: fit-content;
  padding: 5px;
  margin: auto;
  background-color: peru;
  cursor: pointer;
}
</style>
