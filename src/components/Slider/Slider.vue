<template>
  <div>
    <div class="slider-content flex-inline gap-30">
      <div
        v-for="(museum, index) in data"
        :key="index"
        class="slider flex-basis-50"
        @mousemove="(e) => handleMouseMove(e, index)"
      >
        <img :src="museum.src" :alt="museum.punchline" />
        <div class="slider-data-display">
          <p class="punchline">
            {{ museum.punchline }}
          </p>
          <h2>{{ museum.title }}</h2>
          <div
            ref="sliderName"
            class="slider-name"
            :style="`position:fixed; top:${mousePosition.y}; left:${mousePosition.x}`"
          >
            <p class="name">
              {{ museum.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Intersect
      root-margin="0px 0px 900px 0px"
      @enter="handleEnterEvent"
      @leave="handleLeaveEvent"
    >
      <span class="breakpoint"></span>
    </Intersect>
  </div>
</template>

<script>
import data from './data'
import Intersect from 'vue-intersect'
import { reactive } from '@vue/reactivity'

export default {
  components: {
    Intersect
  },
  setup() {
    const mousePosition = reactive({
      x: 0,
      y: 0,
      id: 0
    })
    const handleEnterEvent = () => {
      window.addEventListener('scroll', () => {})
    }
    const handleLeaveEvent = () => {
      console.log('Leave')
    }
    const handleMouseMove = (e, index) => {
      mousePosition.x = e.clientX
      mousePosition.y = e.clientY
      mousePosition.id = index
      console.log(mousePosition.x)
    }
    return {
      data,
      handleEnterEvent,
      handleLeaveEvent,
      handleMouseMove,
      mousePosition
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-content {
  align-items: center;
  overflow-x: auto;
  .slider {
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    min-width: 900px;
    height: 750px;
    background-color: green;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    .slider-data-display {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      text-align: center;
      z-index: 2;
      color: $white;
      h2 {
        max-width: 70%;
        margin-bottom: 0.5em;
      }
      p {
        text-transform: uppercase;
      }
      .slider-name {
        border: 1px solid $white;
        padding: 34px 15px;
        border-radius: 100%;
      }
    }
  }
}
</style>
