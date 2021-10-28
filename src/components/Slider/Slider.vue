<template>
  <div>
    <div ref="slider" class="slider-content flex-inline gap-30">
      <div
        v-for="(museum, index) in data"
        :key="index"
        class="slider flex-basis-50"
        @mousemove="(e) => handleMouseMove(e, index)"
        @mouseleave="mousePosition.id = null"
      >
        <img :src="museum.src" :alt="museum.punchline" />
        <div class="slider-data-display">
          <p class="punchline">
            {{ museum.punchline }}
          </p>
          <h2>{{ museum.title }}</h2>
          <div
            class="slider-name"
            :style="
              mousePosition.id === index
                ? `display: block; position:fixed; top: ${mousePosition.y}px; left: ${mousePosition.x}px`
                : ''
            "
          >
            <p class="name">
              {{ museum.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from './data'
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export default {
  setup() {
    const mousePosition = reactive({
      x: 0,
      y: 0,
      id: 0
    })

    const slider = ref()

    const windowBlock = ref(null)
    let hasEntered = false
    let hasLeave = true

    onMounted(() => {
      window.addEventListener('scroll', () => {
        console.log(window.scrollY)
        if (
          window.scrollY >= 1950 &&
          window.scrollY <= 3140 &&
          hasEntered === false
        ) {
          hasEntered = true
          hasLeave = false
          handleEnterEvent()
          return
        } else if (window.scrollY > 3140 && hasLeave === false) {
          hasLeave = true
          hasEntered = false
          handleLeaveEvent()
          return
        }
      })
    })
    const handleEnterEvent = () => {
      slider.value.scrollLeft = 1
      console.log('Enter')
      console.log(windowBlock.value)

      window.addEventListener('wheel', handleScroll, { passive: false })
    }

    const handleScroll = (e) => {
      console.log(slider.value.scrollLeft)
      let ssl = slider.value.scrollLeft

      if (!e.deltaY) {
        return
      }
      if (ssl >= 2420 || ssl === 0) {
        return
      }

      slider.value.scrollLeft += e.deltaY + e.deltaX
      console.log(ssl)
      e.preventDefault()
    }

    const handleLeaveEvent = () => {
      console.log('Leave')
      window.removeEventListener('wheel', handleScroll, { passive: false })
    }

    const handleMouseMove = (e, index) => {
      mousePosition.x = e.clientX
      mousePosition.y = e.clientY
      mousePosition.id = index
    }

    return {
      data,
      handleEnterEvent,
      handleLeaveEvent,
      handleMouseMove,
      mousePosition,
      slider
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-content {
  margin-bottom: 217px;
  cursor: none;
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
        display: none;
        top: 80%;
        border: 1px solid $white;
        padding: 34px 15px;
        border-radius: 100%;
        white-space: nowrap;
      }
    }
  }
}
</style>
