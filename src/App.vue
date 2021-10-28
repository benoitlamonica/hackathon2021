<template>
  <GrainedBG>
    <Hero />
    <FirstTextContent />
    <FourthSection />
    <FiveSection />
  </GrainedBG>
</template>

<script>
import GrainedBG from './components/GrainedBG'
import Hero from './components/Hero'
import FirstTextContent from './components/FirstTextContent/FirstTextContent.vue'
import FourthSection from './components/FourthSection/FourthSection.vue'
import FiveSection from './components/FiveSection/FiveSection.vue'

export default {
  components: {
    GrainedBG,
    Hero,
    FirstTextContent,
    FourthSection,
    FiveSection
  }
}
</script>

<style lang="scss"></style>
