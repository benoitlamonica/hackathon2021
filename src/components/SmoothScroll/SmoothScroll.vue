<template>
  <div class="smooth-scroll">
    <slot />
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
export default {
  setup() {
    onMounted(() => {
      window.addEventListener('scroll', () => {
        let wSy = window.scrollY
        window.scrollY = wSy / 2
      })
    })
  }
}
</script>

<style></style>
