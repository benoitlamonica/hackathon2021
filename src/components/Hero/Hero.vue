<template>
  <div class="hero">
    <div class="hero-top flex-inline gap-50">
      <div class="hero-acc flex-basis-33">
        <span class="hero-dbtypo">Ceci est une ligne de</span>
        <span>texte avec deux typos</span>
        <span class="hero-dbtypo">différentes lorem ipsum</span>
      </div>
      <div class="flex-basis-33">
        <img class="logo" src="@/assets/images/logo.svg" alt="Logo" />
      </div>
      <div class="flex-basis-33">Mona</div>
    </div>
    <Wrapper>
      <div class="hero-title">
        <div><h7>Premier titre</h7></div>
        <h1>Culture</h1>
        <Button content="Télécharger" />
      </div>
      <div class="hero-navigation">
        <div class="hero-style-content flex-inline gap-10">
          <HeroStyle orientation="right" class="flex-basis-25" />
          <div class="hero-style-transition flex-basis-75"></div>
          <HeroStyle orientation="left" class="flex-basis-25" />
        </div>
      </div>
    </Wrapper>
  </div>
</template>

<script>
import HeroStyle from './component/HeroStyle'
import Button from '../Button'
import Wrapper from '../Wrapper'
export default {
  components: { HeroStyle, Button, Wrapper }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  width: 100vw;
  h1 {
    color: $brown;
  }
  .hero-dbtypo {
    font-family: $ak-font;
  }
  .hero-top {
    > div {
      display: flex;
      align-items: center;
    }
    > .hero-acc {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      text-align: left;
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
    button {
      display: block;
      margin: 50px auto;
    }
  }
  .hero-navigation {
    .hero-style-transition {
      position: relative;
      top: 5px;
      border-top: 1px solid $black;
    }
  }
}
</style>
