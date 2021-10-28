<template>
  <GrainedBG>
    <Hero />
    <FirstTextContent />
  </GrainedBG>
</template>

<script>
import GrainedBG from './components/GrainedBG'
import Hero from './components/Hero'
import FirstTextContent from './components/FirstTextContent/FirstTextContent.vue'

export default {
  components: {
    GrainedBG,
    Hero,
    FirstTextContent
  }
}
</script>

<style lang="scss"></style>
