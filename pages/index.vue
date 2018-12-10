<template>
  <div>
    home page
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('SET_TITLE', 'Home')
    this.$store.commit('SET_LOCATION', { root: 'Home' })
  }
}
</script>
