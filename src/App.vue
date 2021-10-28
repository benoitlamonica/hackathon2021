<template>
  <GrainedBG>
    <Hero />
    <FirstTextContent />
    <Slider />
    <FourthSection />
    <FirstTextContent />
  </GrainedBG>
</template>

<script>
import GrainedBG from './components/GrainedBG'
import Hero from './components/Hero'
import FirstTextContent from './components/FirstTextContent/FirstTextContent.vue'
import Slider from './components/Slider'
import FourthSection from './components/FourthSection/FourthSection.vue'

export default {
  components: {
    GrainedBG,
    Hero,
    FirstTextContent,
    Slider,
    FourthSection
  }
}
</script>

<style lang="scss"></style>
