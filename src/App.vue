<template>
  <GrainedBG>
    <Hero />
    <FirstTextContent />
    <FourthSection />
  </GrainedBG>
</template>

<script>
import GrainedBG from './components/GrainedBG'
import Hero from './components/Hero'
import FirstTextContent from './components/FirstTextContent/FirstTextContent.vue'
import FourthSection from './components/FourthSection/FourthSection.vue'

export default {
  components: {
    GrainedBG,
    Hero,
    FirstTextContent,
    FourthSection
  }
}
</script>

<style lang="scss"></style>
