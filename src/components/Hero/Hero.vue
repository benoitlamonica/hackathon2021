<template>
  <div class="hero">
    <div class="hero-top flex-inline gap-50">
      <div class="hero-acc flex-basis-33">
        <span class="hero-dbtypo">Rencontre</span>
        <span>découvre</span>
        <span class="hero-dbtypo">partage</span>
      </div>
      <div class="flex-basis-33">
        <img class="logo" src="@/assets/images/logo.svg" alt="Logo" />
      </div>
      <div class="hero-last flex-basis-33">
        <img src="@/assets/images/logo_header.svg" alt="Logo Header" />
      </div>
    </div>
    <Wrapper>
      <div class="hero-title">
        <div><h7>Découvrez</h7></div>
        <h1>l’Art visuel</h1>
        <Button content="Télécharger" />
      </div>
      <div class="hero-navigation">
        <div class="hero-style-content flex-inline gap-10">
          <HeroStyle
            orientation="right"
            class="flex-basis-25"
            head="JE SUIS UN"
            title="Professionnel"
            content="Vous souhaitez donner plus de visibilité à vos expositions ? Enregistrez-vous dès maintenant !"
          />
          <div class="hero-style-transition flex-basis-75"></div>
          <HeroStyle
            orientation="left"
            class="flex-basis-25"
            head="JE SUIS UN"
            title="Amateur d’art"
            content="Parcourez l’agenda culturel de votre ville. Créez ou rejoignez un groupe et retrouvez vous sur un évènement culturel !"
          />
        </div>
      </div>
    </Wrapper>
    <img class="hero-arrow" src="@/assets/images/arrow.svg" alt="Arrow" />
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
  position: relative;
  height: 100vh;
  width: 100vw;
  .hero-arrow {
    position: absolute;
    top: 30vh;
    right: 5vw;
    transform: translate(-60%);
  }
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
      padding: 0 5vw;
    }
    > .hero-acc {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      text-align: left;
      line-height: 25px;
      > span {
        font-size: 20px;
        line-height: 30px;
        &:nth-child(2) {
          font-size: 25px;
        }
      }
    }

    > .hero-last {
      align-items: center;
      justify-content: flex-end;
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
