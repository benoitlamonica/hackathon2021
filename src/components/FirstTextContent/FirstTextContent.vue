<template>
  <div id="container-first-text">
    <span class="text-part .align-items-center"> Mona Lisa </span>

    <div ref="roundImg1" class="container-round-img">
      <RoundImg :img-link="img1" />
    </div>
    <Intersect @enter="upImg(0)">
      <span class="text-part .align-items-center">
        symbole de l’art universel, est fatiguée dans ce monde où tout est trop.
        Mona, c’est la première
      </span>
    </Intersect>
    <div ref="roundImg2" class="container-round-img">
      <RoundImg :img-link="img2" />
    </div>
    <Intersect @enter="upImg(1)">
      <span class="text-part .align-items-center">
        application de rencontre qui assemble et rassemble les amoureux d’art
        visuel. Faites partie de la rencontre
      </span>
    </Intersect>
    <div ref="roundImg3" class="container-round-img">
      <RoundImg :img-link="img3" />
    </div>
    <Intersect @enter="upImg(2)">
      <span class="text-part .align-items-center"
        >entre deux groupes et visitez un lieu culturel autour d’un événement
        singulier. Seul ou avec vos proches rencontrez, admirez, partagez. Mona,
        œuvre pour notre art.
      </span>
    </Intersect>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Intersect from 'vue-intersect'
import img1 from '@/assets/images/roundImgs/1.png'
import img2 from '@/assets/images/roundImgs/2.png'
import img3 from '@/assets/images/roundImgs/3.png'

import RoundImg from '../RoundImg/RoundImg.vue'

export default {
  components: { RoundImg, Intersect },

  setup() {
    const roundImg1 = ref()
    const roundImg2 = ref()
    const roundImg3 = ref()
    const roundImg = [roundImg1, roundImg2, roundImg3]

    const upImg = (nb) => {
      roundImg[nb].value.style.display = 'inline-block'
    }

    return {
      roundImg,
      roundImg1,
      roundImg2,
      roundImg3,
      RoundImg,
      upImg,
      img1,
      img2,
      img3
    }
  }
}
</script>

<style lang="scss">
#container-first-text {
  margin: 217px 0;
  padding: 0 15vw;

  .text-part {
    font-family: $main-font;
    font-size: $h6-fs;
    line-height: 72px;
    text-align: center;
  }

  .container-round-img {
    width: 95px;
    height: 95px;
    border-radius: 50%;
    display: none;
    clip-path: circle(0% at 50% 50%);
    animation: scaleUp 300ms ease-in-out forwards 300ms;

    @keyframes scaleUp {
      from {
        clip-path: circle(0% at 50% 50%);
      }
      to {
        clip-path: circle(50% at 50% 50%);
      }
    }
  }
}
</style>
