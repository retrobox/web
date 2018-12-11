<template>
  <div>
    <div v-if="$isServer === true">
      <slot />
    </div>
    <div
      v-else
      @click="scroll">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    scroll: function () {
      console.log('scroll')
      this.$scrollTo('#go')
    }
  }
}
</script>
