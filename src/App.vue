<template>
  <GrainedBG>
    <Hero />
    <FirstTextContent />
    <Slider />
    <FirstTextContent />
  </GrainedBG>
</template>

<script>
import GrainedBG from './components/GrainedBG'
import Hero from './components/Hero'
import FirstTextContent from './components/FirstTextContent/FirstTextContent.vue'
import Slider from './components/Slider'

export default {
  components: {
    GrainedBG,
    Hero,
    FirstTextContent,
    Slider
  }
}
</script>

<style lang="scss"></style>
