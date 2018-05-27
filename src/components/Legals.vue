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
const about = require('../assets/content/about.md')
export default {
  name: 'Legals',
  data () {
    return {
      content: ""
    }
  },
  created () {
    this.content = about
  }
}
</script>
