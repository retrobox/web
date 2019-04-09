<template>
  <i :class="'icon ' + value + customClass"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    value: {
      default: '',
      type: String
    },
    spin: {
      default: false,
      type: Boolean
    },
    right: {
      default: false,
      type: Boolean
    },
    left: {
      default: false,
      type: Boolean
    },
    'no-margin': {
      default: false,
      type: Boolean
    }
  },
  data: () => ({
    customClass: ''
  }),
  mounted () {
    this.customClass = this.spin ? ' fa-spin' : ''
    this.customClass += this.noMargin ? ' no-margin' : ''
    this.customClass += this.left ? ' mr-3' : ''
    this.customClass += this.right ? ' ml-3' : ''
  }
}
</script>

<style>
.no-margin {
  margin-right: 0 !important;
}
</style>
