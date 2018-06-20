<template>
    <div>
        <fade-transition group>
            <div v-if="loading" key="loading">
                <div class="loading">
                    <icon name="sync" spin scale="3"></icon>
                </div>
            </div>
            <div v-if="loading == false" key="loading">
                <div class="cover-title">
                    <div class="cover-title-content container mx-auto">
                        <h1>{{$t('docs')}}</h1>
                    </div>
                </div>
                <div class="container mx-auto">
                    <div class="article">
                        <div class="docs-nav">
                            <nav>
                                <div class="nav-item active">
                                    <a @click="$router.push({name: 'DocumentationHome'});">{{$t('home')}}</a>
                                </div>
                                <div class="nav-item" v-for="item in items">
                                    <a @click="$router.push({name: 'DocumentationPage', params: {slug: item.slug}});">{{item.name}}</a>
                                </div>
                            </nav>
                        </div>
                        <div>
                            <div class="content doc-page-content" v-html="content">
                            </div>
                            <div class="navigation">
                                <ul class="list-reset flex justify-between">
                                    <li class="mr-3">
                                        <a class="inline-block py-2 px-4 text-grey-light cursor-not-allowed disabled">{{$t('previous')}}</a>
                                    </li>
                                    <li class="mr-3">
                                    </li>
                                    <li class="mr-3">
                                        <a class="inline-block border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white"
                                           @click="$router.push({name: 'DocumentationPage', params: {slug: items[0].slug}});">{{$t('next')}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </fade-transition>
    </div>
</template>

<script>
    import axios from "axios"
    import marked from "marked"
    export default {
        name: 'DocumentationHome',
        data() {
            return {
                content: "",
                loading: true,
                items: []
            }
        },
        watch: {
            '$i18n.locale' () {
                this.fetchData()
            }
        },
        methods: {
            fetchData: function () {
                this.$store.commit('SET_TITLE', {
                    context: this,
                    key: 'docs'
                })
                this.$store.commit('SET_LOCATION', {
                    root: this.$t('docs'),
                    sub_root: this.$t('home')
                })
                const marked = require("marked");
                axios.get(process.env.DOCS_ENDPOINT + "/config.json").then((response) => {
                    var locale = response.data.locales.filter((item) => {
                        return item.slug == this.$i18n.locale
                    })[0]

                    this.items = locale.tree
                    var slug = locale.home.slug
                    axios.get("https://docs.retrobox.tech/content/" + this.$i18n.locale + "/" + slug + ".md").then((response) => {
                        this.content = marked(response.data)
                        this.loading = false
                    })
                })
            }
        },
        created() {
            this.fetchData()
        }
    }
</script>
