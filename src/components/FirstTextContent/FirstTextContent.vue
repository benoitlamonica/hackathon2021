<template>
  <div id="container-first-text" class="align-items-center">
    <span class="text-part" @mouseover="mouseOver"> Lorem ipsum </span>
    <RoundImg imgLink=./src/assets/images/roundImgs/1.png />
    <span class="text-part">
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    </span>
    <RoundImg imgLink=./src/assets/images/roundImgs/2.png />
    <span class="text-part" @mouseover="mouseOver">
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    </span>
    <RoundImg imgLink=./src/assets/images/roundImgs/3.png />
    <span class="text-part" @mouseover="mouseOver">
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    </span>
  </div>
</template>

<script>
/* import { ref } from '@vue/reactivity' */
import RoundImg from '../RoundImg/RoundImg.vue'

export default {
  components: { RoundImg },

  setup() {
    /* const round1 = ref()
    const round2 = ref()
    const round3 = ref()
    const rounds = [round1, round2, round3] */

    const mouseOver = () => {
      /* rounds.value.style.display = 'block' */
      console.log('hover')
    }

    return {
      RoundImg,
      mouseOver
    }
  }
}
</script>

<style lang="scss">
#container-first-text {
  .text-part {
    font-family: 'Romana BT';
    font-size: $h2-fs;
  }
}
</style>
