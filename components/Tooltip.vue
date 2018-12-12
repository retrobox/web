<template>
  <div>
    <div v-if="$isServer === true">
      <slot />
    </div>
    <div
      v-tooltip.top="value"
      v-else>
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
  }
}
</script>
