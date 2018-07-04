<template>
    <div>
        <div class="cover-title">
            <div class="cover-title-content container mx-auto">
                <h1>{{$t('terms-of-sale')}}</h1>
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
        name: 'About',
        data () {
            return {
                content: ''
            }
        },
        watch: {
            '$i18n.locale' () {
                this.fetchData()
            }
        },
        methods: {
            fetchData: function () {
                this.$store.commit('SET_TITLE', {context: this, key: 'terms-of-sale'})
                this.$store.commit('SET_LOCATION', {
                    root: this.$t('home'),
                    sub_root: this.$t('terms-of-sale')
                })

                const content = require('../assets/content/' + this.$i18n.locale + '/terms-of-sale.md')
                this.content = content
            }
        },
        created () {
            this.fetchData()
        }
    }
</script>
