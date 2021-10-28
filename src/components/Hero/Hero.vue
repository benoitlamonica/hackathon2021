<template>
  <div class="hero align-items-center">
    <div class="hero-top flex-inline gap-50">
      <div class="hero-acc flex-basis-33">
        <div>Ceci est une ligne de</div>
        <div>texte avec deux typos</div>
        <div>différentes lorem ipsum</div>
      </div>
      <div class="flex-basis-33">
        <img class="logo" src="@/assets/images/logo.svg" alt="Logo" />
      </div>
      <div class="flex-basis-33">Mona</div>
    </div>
    <div class="hero-title">
      <div><h7>Premier titre</h7></div>
      <h1>Culture</h1>
    </div>
    <div class="hero-navigation">
      <Button content="Télécharger" />
      <div class="hero-style-content">
        <HeroStyle />
      </div>
    </div>
  </div>
</template>

<script>
import HeroStyle from './component/HeroStyle'
import Button from '../Button'
export default {
  components: { HeroStyle, Button }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  width: 100vw;
  h1 {
    color: $brown;
  }
  .hero-top {
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    > .hero-acc {
      flex-direction: column;
      line-height: 25px;
    }
    height: 25%;
    .logo {
      display: block;
      margin: auto;
    }
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

  .hero-navigation {
    display: flex;
    justify-content: center;
  }
}
</style>
