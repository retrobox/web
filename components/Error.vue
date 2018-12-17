<template>
  <div class="error">
    <div class="error-content">
      <div class="error-icon">
        <Icon :value="icon" />
      </div>
      <div class="error-text">
        <h2 class="error-title">{{ title }}</h2>
        <p class="error-description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon"
export default {
  name: 'Error',
  components: {Icon},
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'fas fa-exclamation-circle'
    }
  }
}
</script>
