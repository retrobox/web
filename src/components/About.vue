<template>
    <div>
        <div class="cover-title">
            <div class="cover-title-content container mx-auto">
                <h1>{{$t('about')}}</h1>
            </div>
        </div>
        <div class="container mx-auto">
            <div class="article pt-4">
                <div class="content" v-html="content">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
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
              this.$store.commit('SET_TITLE', {context: this, key:'about'})
              this.$store.commit('SET_LOCATION', {
                  root: this.$t('about')
              })
              const about = require('../assets/content/' + this.$i18n.locale + '/about.md')
              this.content = about
          }
        },
        created () {
            this.fetchData()
        }
    }
</script>
