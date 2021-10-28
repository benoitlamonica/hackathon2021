<template>
  <div id="fourth-section">
    <Wrapper>
      <span class="gap-30">Punch line</span>
      <h4 class="gap-50" @mousemove="imgUp" @mouseleave="imgDown">
        Un lieu Culturel
      </h4>
      <img ref="img" src="@/assets/images/moveImgs/1.png" />
      <h4 class="gap-50" @mousemove="imgUp" @mouseleave="imgDown">
        Un particulier
      </h4>
      <Button content="Contact" />
    </Wrapper>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

import Button from '../Button/Button.vue'
import Wrapper from '../Wrapper/Wrapper.vue'

export default {
  components: { Button, Wrapper },

  setup() {
    const img = ref()

    const imgUp = (event) => {
      img.value.style.cssText =
        'left: ' + event.clientX + 'px; top: ' + event.clientY + 'px;'
      img.value.style.display = 'block'
    }

    const imgDown = () => {
      img.value.style.display = 'none'
    }

    return {
      Button,
      Wrapper,
      img,
      imgUp,
      imgDown
    }
  }
}
</script>

<style lang="scss">
#fourth-section {
  text-align: center;

  span {
    font-family: $ak-mono-font;
    font-size: $span-3-fs;
    letter-spacing: $span-3-ls;
    text-transform: uppercase;
    display: inline-block;
    width: fit-content;
    margin: auto;
  }

  h4 {
    font-family: $ak-font;
    width: fit-content;
    margin: auto;

    &:hover {
      font-family: $main-font;
      cursor: pointer;
    }
  }

  img {
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    display: none;
    z-index: -1;
  }
}
</style>
