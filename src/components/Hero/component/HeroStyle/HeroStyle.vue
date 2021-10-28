<template>
  <div class="hero-style">
    <span
      class="span4"
      :class="{
        'align-text-right': orientation === 'right',
        'align-text-left': orientation === 'left'
      }"
    >
      {{ head }}
    </span>
    <h6
      :class="{
        'align-text-right': orientation === 'right',
        'align-text-left': orientation === 'left'
      }"
    >
      {{ title }}
    </h6>
    <span
      class="span2"
      :class="{
        'align-text-right': orientation === 'right',
        'align-text-left': orientation === 'left'
      }"
    >
      {{ content }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    head: {
      type: String,
      default: 'Lorem'
    },
    title: {
      type: String,
      default: 'Premier'
    },
    content: {
      type: String,
      default:
        'Lorem ipsum sit amet, consetetur Nihil est enim virtute amabilius, nihil quod magis'
    },
    orientation: {
      type: String,
      default: 'right'
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-style {
  min-width: 300px;
  h6 {
    text-transform: lowercase;
    line-height: 72px;
    margin-bottom: 0.2em;
  }
  span {
    display: block;
  }
  .align-text-right {
    text-align: right;
  }
  .align-text-left {
    text-align: left;
  }
}
</style>
