<template>
  <i :class="'icon ' + value + spinClass"></i>
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
    }
  },
  data: () => ({
    spinClass: ''
  }),
  mounted () {
    this.spinClass = this.spin ? ' fa-spin' : ''
  }
}
</script>
