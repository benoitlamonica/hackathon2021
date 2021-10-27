<template>
  <div id="grained" ref="grainedElem">
    <slot />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useFilters from '../../filters/useFilters'
import { onMounted } from '@vue/runtime-core'
import optionGrain from './data/option-grain'

export default {
  setup() {
    const grainedElem = ref()
    const { grained } = useFilters()

    onMounted(() => {
      console.log('Style', grainedElem.value.style)
      grained(grainedElem.value, optionGrain)
    })

    return {
      grainedElem
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
  width: 100%;
  background-color: #cfc170;
}
</style>
