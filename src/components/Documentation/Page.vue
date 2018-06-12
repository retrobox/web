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
                        <h1>{{title}}</h1>
                    </div>
                </div>
                <div class="container mx-auto">
                    <div class="article">
                        <div class="docs-nav">
                            <nav>
                                <div class="nav-item">
                                    <a @click="$router.push({name: 'DocumentationHome'})">
                                        {{$t('home')}}
                                    </a>
                                </div>
                                <div v-for="item in items"
                                     v-bind:class="{'active': item.slug == $route.params.slug, 'nav-item': true}">
                                    <a @click="$router.push({name: 'DocumentationPage', params: {slug: item.slug}})">
                                        {{item.name}}
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <div class="docs-content">
                            <div class="content doc-page-content" v-html="content">
                            </div>
                            <div class="navigation">
                                <ul class="list-reset flex justify-between">
                                    <li class="mr-3">
                                        <a class="inline-block border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white"
                                           @click="$router.push({name: 'DocumentationPage', params: {slug: items[actual_index - 1].slug}});"
                                           v-if="actual_index > 0">{{$t('previous')}}</a>
                                        <a class="inline-block border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white"
                                           @click="$router.push({name: 'DocumentationHome'});" v-if="actual_index == 0">{{$t('previous')}}</a>
                                    </li>
                                    <li class="mr-3">
                                    </li>
                                    <li class="mr-3">
                                        <a class="inline-block py-2 px-4 text-grey-light cursor-not-allowed disabled"
                                           v-if="actual_index == items.length - 1">{{$t('next')}}</a>
                                        <a class="inline-block border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white"
                                           @click="$router.push({name: 'DocumentationPage', params: {slug: items[actual_index + 1].slug}});"
                                           v-if="actual_index != items.length - 1">{{$t('next')}}</a>
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
        data () {
            return {
                content: "",
                loading: true,
                title: "",
                items: [],
                actual_item: {},
                actual_index: 0
            }
        },
        methods: {
            fetchData() {
                this.loading = true
                this.$store.commit('SET_TITLE', {context: this, key: 'docs'})
                this.$store.commit('SET_LOCATION', {
                    root: this.$t('docs')
                })
                const marked = require("marked");
                axios.get("https://docs.retrobox.tech/config.json").then((response) => {
                    var locale = response.data.locales.filter((item) => {
                        return item.slug == this.$i18n.locale
                    })[0]

                    this.title = locale.tree.filter((item) => {
                        return item.slug == this.$route.params.slug
                    })[0].name
                    this.$store.commit('SET_TITLE', this.title)
                    this.$store.commit('SET_LOCATION', {
                        root: this.$t('docs'),
                        sub_root: this.title
                    })
                    this.items = locale.tree

                    this.actual_item = this.items.filter((item, index) => {
                        return item.slug == this.$route.params.slug
                    })[0]
                    this.actual_index = this.items.indexOf(this.actual_item)
                    axios.get("https://docs.retrobox.tech/content/" + this.$i18n.locale + "/" + this.$route.params.slug + ".md").then((response) => {
                        this.content = marked(response.data)

                        setTimeout(() => {
                            this.loading = false
                        }, 500)
                    })

                })
            }
        },
        watch: {
            '$route' (to, from) {
                this.fetchData()
            },
            '$i18n.locale' () {
                this.fetchData()
            }
        },
        created () {
            this.fetchData()
        }
    }
</script>
