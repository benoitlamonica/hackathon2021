<template>
  <div id="fourth-section">
    <Wrapper>
      <span class="gap-30">MONA, Au-DELà de l’art</span>
      <h4
        class="gap-50"
        @mouseover="imgChoosen = img1"
        @mousemove="imgUp"
        @mouseleave="imgDown"
      >
        Un lieu Culturel
      </h4>
      <img ref="img" :src="imgChoosen" />
      <h4
        class="gap-50"
        @mouseover="imgChoosen = img2"
        @mousemove="imgUp"
        @mouseleave="imgDown"
      >
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
import img1 from '@/assets/images/moveImgs/1.png'
import img2 from '@/assets/images/moveImgs/2.png'

export default {
  components: { Button, Wrapper },

  setup() {
    const img = ref()
    const imgChoosen = ref(img1)
    const clientX = ref(0)
    const clientY = ref(0)
    const speed = 0.2
    let imgX = 0
    let imgY = 0

    const imgUp = (event) => {
      clientX.value = event.clientX
      clientY.value = event.clientY
      requestAnimationFrame(handleAnimation)
    }

    const handleAnimation = () => {
      let distX = clientX.value - imgX
      let distY = clientY.value - imgY

      imgX = imgX + distX * speed
      imgY = imgY + distY * speed

      img.value.style.left = imgX + 'px'
      img.value.style.top = imgY + 'px'
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
      imgDown,
      imgChoosen,
      img1,
      img2
    }
  }
}
</script>

<style lang="scss" scoped>
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
