<template>
    <div>
      <div v-if="loading">
        <div class="loading">
          <icon name="sync" spin scale="3"></icon>
        </div>
      </div>
      <div v-if="loading == false">
        <div class="cover-title">
          <div class="cover-title-content container mx-auto">
            <h1>{{title}}</h1>
          </div>
        </div>
        <div class="container mx-auto">
          <div class="article">
            <div class="docs-nav">
              <nav>
                <div class="nav-item">
                  <a href="#" @click="$router.push({name: 'DocumentationHome'})">
                    {{$t('home')}}
                  </a>
                </div>
                <div v-for="item in items" v-bind:class="{'active': item.slug == $route.params.slug, 'nav-item': true}">
                  <a href="#" @click="$router.push({name: 'DocumentationPage', params: {slug: item.slug}})">
                    {{item.name}}
                  </a>
                </div>
              </nav>
            </div>
            <div class="content" v-html="content">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import axios from "axios"
    import marked from "marked"
    export default {
        name: 'DocumentationHome',
        data () {
            return {
              content: "",
              loading: true,
              title: "",
              items: []
            }
        },
        methods: {
          fetchData() {
            this.loading = true
            this.$store.commit('SET_TITLE', {context: this, key:'docs'})
            const marked = require("marked");
            axios.get("https://docs.retrobox.tech/config.json").then((response) => {
                var locale = response.data.locales.filter((item) => {
                  return item.slug == this.$i18n.locale
                })[0]

                this.title = locale.tree.filter((item) => {
                  return item.slug == this.$route.params.slug
                })[0].name
                this.$store.commit('SET_TITLE', this.title)
                this.items = locale.tree
                axios.get("https://docs.retrobox.tech/content/" + this.$i18n.locale + "/" + this.$route.params.slug + ".md").then((response) => {
                  this.content = marked(response.data)
                  this.loading = false
                  console.log('done');
                })

            })
          }
        },
        watch: {
          '$route' (to, from) {
              this.fetchData()
          }
        },
        created () {
          this.fetchData()
        }
    }
</script>
