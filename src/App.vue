<template>
  <GrainedBG>
    <Hero />
    <FirstTextContent />
    <Slider />
    <FourthSection />
    <FiveSection />
    <Footer />
  </GrainedBG>
</template>

<script>
import GrainedBG from './components/GrainedBG'
import Hero from './components/Hero'
import FirstTextContent from './components/FirstTextContent/FirstTextContent.vue'
import Slider from './components/Slider'
import FourthSection from './components/FourthSection/FourthSection.vue'
import FiveSection from './components/FiveSection/FiveSection.vue'
import Footer from './components/Footer'

export default {
  components: {
    GrainedBG,
    Hero,
    FirstTextContent,
    Slider,
    FourthSection,
    FiveSection,
    Footer
  }
}
</script>

<style lang="scss"></style>
