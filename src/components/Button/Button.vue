<template>
  <button :style="inversed ? `background-color: #fbfbfb; color: #1d1d1d` : ''">
    {{ content }}
  </button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: 'Placeholder'
    },
    inversed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  background-color: $black;
  appearance: none;
  font-family: $ak-mono-font;
  color: $white;
  text-transform: uppercase;
  padding: 15px 45px;
  border-radius: 35px;
  border: none;
  cursor: pointer;
}
</style>
