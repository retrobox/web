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
  }
}
</script>

<style>
.no-margin {
  margin-right: 0 !important;
}
</style>
