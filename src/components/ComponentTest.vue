<template>
  <p @click="increment">
    {{ capitaliseFirstLetter(msg) }} et l'increment : {{ i }}
  </p>
  <AutreTest nom-props="coucou" />
</template>

<script>
import { ref } from '@vue/reactivity'
import useFilters from '../filters/useFilters'
import AutreTest from './AutreTest.vue'

export default {
  components: { AutreTest },
  props: {
    msg: {
      type: String,
      default: 'Coucou'
    }
  },

  setup() {
    const i = ref(0)

    const increment = () => {
      i.value++
    }

    const { capitaliseFirstLetter } = useFilters()

    return {
      i,
      increment,
      capitaliseFirstLetter
    }
  }
}
</script>

<style></style>
