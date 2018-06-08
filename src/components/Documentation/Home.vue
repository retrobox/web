<template>
    <div>
      <div class="cover-title">
        <div class="cover-title-content container mx-auto">
          <h1>{{$t('docs')}}</h1>
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
        name: 'DocumentationHome',
        data () {
            return {
              content: `<b>Je suis une</b> personne`
            }
        },
        created () {
          this.$store.commit('SET_TITLE',{context: this, key:'documentation'})
        }
    }
</script>
