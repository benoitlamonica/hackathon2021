<template>
  <div ref="footer">
    <Intersect @enter="handleIntersect">
      <span class="breakpoint"></span>
    </Intersect>
    <div class="footer-content flex-inline">
      <div class="footer-img-content">
        <div class="img-left-1">
          <img src="@/assets/images/footer/img-left-1.png" alt="Hey" />
          <div ref="pLeft" class="img-left-2">
            <img src="@/assets/images/footer/img-left-2.png" alt="Hey" />
          </div>
        </div>
      </div>
      <div class="footer-info">
        <span class="span2">obtenir</span>
        <h5>Mona oeuvre pour notre art</h5>
        <p>
          Créez un groupe, invitez vos proches , rejoignez des groupes autour
          d’un évènement singulier.
        </p>
        <p>
          Mona est disponible gratuitement en téléchargement sur l’AppStore et
          PlayStore.
        </p>
        <Button content="Télécharger" inversed />
      </div>
      <div class="footer-img-content">
        <div class="img-right-1">
          <img src="@/assets/images/footer/img-right-1.png" alt="Hey" />
          <div ref="pRight" class="img-right-2">
            <img src="@/assets/images/footer/img-right-2.png" alt="Hey" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../Button'
import Intersect from 'vue-intersect'
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
  components: { Button, Intersect },
  setup() {
    const store = useStore()
    const pLeft = ref(null)
    const pRight = ref(null)
    const footer = ref(null)
    const handleIntersect = () => {
      store.commit('changeBgColor', '#1d1d1d')
      window.addEventListener('scroll', () => {
        let oSFooter = window.scrollY - footer.value.offsetTop
        pLeft.value.style.bottom = oSFooter / 8 + 'px'
        pRight.value.style.bottom = oSFooter / 8 + 'px'
      })
    }

    return {
      handleIntersect,
      pLeft,
      pRight,
      footer
    }
  }
}
</script>

<style scoped lang="scss">
div {
  .footer-content {
    padding: 280px 0 380px;
    transition: 1s ease-in;
    .footer-img-content {
      flex-grow: 1;
      div {
        background-color: $white;
        border-radius: 14px;
      }
      img {
        border-radius: 14px;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      .img-left-1 {
        transform: translateY(100%);
        position: relative;
        height: 365px;
        .img-left-2 {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform: translateX(-50%);
          width: 364px;
          height: 465px;
        }
      }
      .img-right-1 {
        position: relative;
        height: 389px;
        .img-right-2 {
          position: absolute;
          bottom: -10%;
          left: -50%;
          transform: translateX(60%);
          width: 296px;
          height: 378px;
        }
      }
    }
    .footer-info {
      width: 500px;
      padding: 0 100px;
      text-align: center;
      color: $white;
      span {
        text-transform: uppercase;
      }
      p {
        width: 350px;
        margin: 50px auto;
        font-family: $ak-font;
      }
    }
  }
}
</style>
