<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{$t('legals')}}</h1>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="article">
        <div class="content" v-html="content">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Legals',
  data () {
    return {
      content: ""
    }
  },
  created () {  
    this.$store.commit('SET_TITLE', {context: this, key:'legals'})
    const about = require('../assets/content/' + this.$i18n.locale + '/legals.md')
    this.content = about
  }
}
</script>
