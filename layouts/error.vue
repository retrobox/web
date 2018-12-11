<template>
  <div class="not-found">
    <div class="not-found-content">
      <div class="not-found-icon">
        <Icon value="fas fa-exclamation-circle" />
      </div>
      <div class="not-found-text">
        <h2 class="not-found-title">{{ $t('not-found.title') }}</h2>
        <p class="not-found-description">{{ $t('not-found.description') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../components/Icon"
export default {
  components: {Icon},
  layout: 'default',
  head () {
    return {
      title: 'Not found page'
    }
  },
  props: {
    error: {
      required: true,
      type: Object | Array
    }
  }
}
</script>
