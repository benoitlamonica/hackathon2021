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
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: inline-block;
  background-color: gray;
  clip-path: circle(50% at 50% 50%);

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
