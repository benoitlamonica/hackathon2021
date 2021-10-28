<template>
  <div id="five-section">
    <Wrapper>
      <h6 class="h6 gap-70">
        Mona a pour mission de promouvoir la diversité culturelle. Nous pensons
        qu'il est important d'élargir les cultures autour de rencontres
        singulières.
      </h6>

      <div id="five-section--container-text" class="gap-20">
        <p class="p">
          Parce que nous savons qu’aller au musée est une activité qui se
          partage, seul ou entre amis, avec Mona, créez votre groupe autour d’un
          évènement.
        </p>
        <p class="p">
          Faites partie de la rencontre entre deux groupes et visitez un lieu
          culturel autour d’un événement singulier.
        </p>
      </div>

      <div class="container-logo align-items-center gap-80">
        <img class="logo-more" src="@/assets/images/logo-more.svg" />
        <img class="logo-arrow" src="@/assets/images/arrow.svg" />
      </div>

      <div id="five-section--span-line">
        <span id="five-section--span2" class="span2"
          >Mona, l’art sans limites
        </span>
      </div>
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from '../Wrapper'
export default {
  components: { Wrapper }
}
</script>

<style lang="scss">
#five-section {
  margin: 217px 0;

  h6 {
    line-height: 70px;
  }

  #five-section--container-text {
    display: flex;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 100px;
    margin-right: 100px;

    p {
      font-family: $ak-font;
      box-sizing: border-box;
      line-height: 30px;
    }
  }

  .container-logo {
    display: flex;

    img {
      height: fit-content;
    }
    .logo-arrow {
      transform: rotate(-90deg);
      margin-left: 140px;
    }
  }

  #five-section--span-line {
    span {
      font-family: $ak-mono-font;
      text-transform: uppercase;
      display: flex;
      align-items: flex-end;

      &::after {
        content: '';
        display: block;
        width: 70%;
        height: 1px;
        background-color: $black;
        margin-left: 30px;
      }
    }
  }
}
</style>
