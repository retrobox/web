<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{$t('contact-us')}}</h1>
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
  name: 'Terms',
    data () {
        return {
            content: ""
        }
    },
    watch: {
        '$i18n.locale' () {
            this.fetchData()
        }
    },
    methods: {
        fetchData: function() {
            this.$store.commit('SET_TITLE', {context: this, key:'contact-us'})
            this.$store.commit('SET_LOCATION', {
                root: this.$t('home'),
                sub_root: this.$t('contact-us')
            })
            const about = require('../assets/content/' + this.$i18n.locale + '/contact-us.md')
            this.content = about
        }
    },
    created () {
        this.fetchData()
    }
}
</script>
