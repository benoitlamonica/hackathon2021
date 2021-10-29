<template>
  <div id="grained" ref="grainedElem" :style="`background-color: ${bgColor}`">
    <slot />
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import useFilters from '../../filters/useFilters'
import { onMounted } from '@vue/runtime-core'
import optionGrain from './data/option-grain'
import { useStore } from 'vuex'

export default {
  setup() {
    const grainedElem = ref()
    const { grained } = useFilters()
    const store = useStore()
    const bgColor = computed(() => {
      console.log(bgColor.value)
      return store.state.color
    })

    onMounted(() => {
      grained(grainedElem.value, optionGrain)
    })

    return {
      grainedElem,
      bgColor
    }
  }
}
</script>

<style>
#grained {
  transition: 1s ease-in;
  z-index: 0;
}
</style>
