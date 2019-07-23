<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{ $t('privacy') }}</h1>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="article">
        <div
          class="content"
          v-html="content">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('privacy'),
      meta: [
        {property: 'og:title', content: this.$t('privacy')}
      ]
    }
  },
  data () {
    return {
      content: require('../assets/content/' + this.$i18n.locale + '/privacy.md')
    }
  },
  watch: {
    '$i18n.locale': function () {
      this.content = require('../assets/content/' + this.$i18n.locale + '/privacy.md')
    }
  }
}
</script>
