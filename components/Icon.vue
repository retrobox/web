<template>
  <i :class="'icon ' + value"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    value: {
      default: '',
      type: String
    }
  }
}
</script>
