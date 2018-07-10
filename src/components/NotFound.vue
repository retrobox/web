<template>
<div class="not-found">
  <div class="not-found-content">
    <div class="not-found-icon">
      <icon name="exclamation-circle" class="icon" />
    </div>
    <div class="not-found-text">
      <h2 class="not-found-title">{{$t('not-found.title')}}</h2>
      <p class="not-found-description">{{$t('not-found.description')}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {}
  },
  created() {
    this.$store.commit('SET_TITLE', {context: this, key: 'not-found.title'})
    this.$store.commit('SET_LOCATION', {
        root: this.$t('not-found.title')
    })
  }
}
</script>
