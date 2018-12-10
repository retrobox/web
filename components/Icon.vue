<template>
  <div>
    <i :class="'icon ' + value"></i>
  </div>
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
