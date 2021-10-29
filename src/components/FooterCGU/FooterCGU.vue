<template>
  <footer>
    <div id="container-link-footer">
      <img src="@/assets/images/logo-white.svg" />
      <a class="link-footer span3" href="#">Contact</a>
      <a class="link-footer span3" href="#">Professionnel</a>
      <a class="link-footer span3" href="#">Amateur d’art</a>
      <a class="link-footer span3" href="#">Télécharger</a>
      <a class="link-footer span3" href="#">Team</a>
      <a class="link-footer span3" href="#">ECV</a>
      <label>Notre newsletter culturelle</label>
      <input placeholder="Votre e-mail" />
      <span>Nous suivre</span>
      <div class="container-icons-rs">
        <img class="insta" src="@/assets/images/rs/icon-insta.svg" />
        <img class="fb" src="@/assets/images/rs/icon-fb.svg" />
      </div>
      <span class="span4">© 2021 MONA - GROUPE HACKATHON</span>
      <span class="span4">iOS/Android</span>
      <span class="span4">software engineer </span>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {}
}
</script>

<style lang="scss">
footer {
  background-color: $black;
  height: fit-content;

  #container-link-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 10% 10% 10% 70%;
    padding: 8% 4% 4% 4%;
    height: 300px;

    a,
    label:nth-child(8),
    span {
      font-family: $ak-mono-font;
      color: $white;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
    }

    a:nth-child(2) {
      grid-column: 2;
      grid-row: 1;
    }

    a:nth-child(3) {
      grid-column: 2;
      grid-row: 2;
    }

    a:nth-child(4) {
      grid-column: 2;
      grid-row: 3;
    }

    a:nth-child(5) {
      grid-column: 3;
      grid-row: 1;
    }

    a:nth-child(6) {
      grid-column: 3;
      grid-row: 2;
    }

    a:nth-child(7) {
      grid-column: 3;
      grid-row: 3;
    }

    label:nth-child(8) {
      grid-column: 4;
      grid-row: 1;
      margin-right: 25px;
    }

    input {
      grid-column: 4;
      grid-row: 3;
      background-color: transparent;
      border-bottom: 1px solid $gray;
      border-top: none;
      border-right: none;
      border-left: none;
      margin-right: 25px;

      &::placeholder {
        font-family: $ak-font;
      }
    }

    span:nth-child(10) {
      grid-column: 5;
      grid-row: 1;
      margin-left: 20px;
    }

    span:nth-child(11),
    span:nth-child(12),
    span:nth-child(13),
    span:nth-child(14) {
      color: $gray;
    }

    span:nth-child(11) {
      grid-column: 5;
      grid-row: 1;
    }

    span:nth-child(12) {
      grid-column: 1;
      grid-row: 4;
      margin-top: 190px;
    }

    span:nth-child(13) {
      grid-column: 4;
      grid-row: 4;
      margin-left: 20px;
      margin-top: 190px;
    }

    span:nth-child(14) {
      grid-column: 4;
      grid-row: 5;
      margin-left: 20px;
    }

    .container-icons-rs {
      grid-column: 5;
      grid-row: 2;
      margin-left: 20px;

      .insta {
        margin-right: 25px;
      }
    }
  }
}
</style>
