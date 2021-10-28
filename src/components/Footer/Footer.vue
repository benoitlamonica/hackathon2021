<template>
  <div>
    <div class="footer-content flex-inline gap-20">
      <div class="footer-img-content">
        <div class="img-left-1">
          <div class="img-left-2"></div>
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
        <Button inversed />
      </div>
      <div class="footer-img-content">
        <div class="img-right-1">
          <div class="img-right-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../Button'
export default { components: { Button } }
</script>

<style scoped lang="scss">
div {
  background-color: $black;
  color: $white;
  .footer-content {
    padding: 280px 0 380px;
    .footer-img-content {
      flex-grow: 1;
      div {
        background-color: $white;
        border-radius: 14px;
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
