<template>
  <div class="round">
    <img :src="imgLink" />
  </div>
</template>

<script>
export default {
  props: {
    imgLink: {
      type: String,
      default: ''
    }
  },

  setup() {}
}
</script>

<style lang="scss">
.round {
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
