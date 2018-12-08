<template>
  <div>
    <Header />
    <nuxt/>
  </div>
</template>
<script>
  import Header from "../components/Header"
  export default {
    components: {Header},
    mounted () {
      let locale = navigator.language.substring(0, 2);
      if (this.$cookie.get('locale') === undefined || this.$cookie.get('locale') === null) {
        this.$cookie.set('locale', locale);
        this.$i18n.locale = locale
      } else {
        this.$i18n.locale = this.$cookie.get('locale')
      }
    }
  }
</script>
