<template>
  <div class="hero">
    <div class="flex-inline gap-50">
      <div class="flex-basis-33">
        Ceci est une ligne de texte avec deux typos différentes lorem ipsum
      </div>
      <img src="./src/assets/images/logo.svg" alt="Logo" />
      <div class="flex-basis-33">Mona</div>
    </div>
    <div class="hero-title">
      <div><h7>Premier titre</h7></div>
      <h1>Culture</h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  width: 100vw;
  h1 {
    color: $brown;
  }
  .hero-title {
    width: fit-content;
    margin: auto;
    div {
      text-align: center;
      h7 {
        text-transform: uppercase;
      }
    }
  }
}
</style>
