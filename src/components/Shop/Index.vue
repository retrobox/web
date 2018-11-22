<template>
    <div>
        <fade-transition group>
            <div v-if="$store.state.loading" key="$store.state.loading">
                <div class="loading">
                    <icon name="sync" spin scale="3"></icon>
                </div>
            </div>
            <div v-if="$store.state.loading == false" key="$store.state.loading">
                <div class="cover-title">
                    <div class="cover-title-content container mx-auto">
                        <h1>{{$t('shop.title')}}</h1>
                    </div>
                </div>
                <div class="container mx-auto">
                    <shop-header></shop-header>
                    <div class="shop-index-container">
                        <div class="shop-empty-container" v-if="items.length == 0">
                            <div class="shop-empty-icon">
                                <icon name="times-circle" class="icon"></icon>
                            </div>
                            <div class="shop-empty-title">
                                <h3>
                                    {{$t('shop.index.empty')}}
                                </h3>
                            </div>
                        </div>
                        <div v-if="items.length > 0" class="shop-index-category-mosaic">
                            <div class="shop-index-category" v-for="category in items">
                                <h3 class="dividing shop-index-category-title">{{category.title}}</h3>
                                <div class="shop-index-category-items">
                                    <div class="shop-category-empty" v-if="category.items.length == 0">
                                      <div>
                                        <i class="icon far fa-times-circle" />
                                        <p>{{$t('shop.category.empty')}}</p>
                                      </div>
                                    </div>
                                    <div class="shop-card" v-for="item in category.items" v-if="category.items.length > 0" @click="$router.push({name: 'ShopItem', params: {slug:item.slug}})">
                                        <div class="shop-card-thumb" :style="'background-image: url(' + item.image + ')'"></div>
                                        <div class="shop-card-content">
                                            <h4 class="shop-card-title">{{item.title}}</h4>
                                            <p class="shop-card-description">{{item.description}}</p>
                                            <div class="shop-card-footer">
                                                <span class="price">€ {{item.price}}</span>
                                                <a @click="$router.push({name: 'ShopItem', params: {slug:item.slug}})"
                                                   class="button bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full">
                                                    <icon name="shopping-cart" class="icon"></icon>
                                                    {{$t('buy')}}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
    import Header from "./Header.vue"
    export default {
        name: 'ShopIndex',
        data() {
            return {
                items: []
            }
        },
        watch: {
            '$i18n.locale' () {
                this.fetchData()
            }
        },
        components: {
            "shop-header": Header
        },
        methods: {
            fetchData: function () {
                this.$store.commit('SET_LOCATION', {
                    root: this.$t('shop.title')
                })
                this.$store.commit('SET_TITLE', this.$t('shop.title'))
                this.$apitator.query(this, {
                    body: {
                        query: `query($locale: String!) {
                          getManyShopCategories(locale:$locale){
                            id,
                            title,
                            items {
                              id,
                              slug,
                              title,
                              image,
                              price,
                              description_short
                            }
                          }
                        }`,
                        variables: {
                          locale: this.$i18n.locale
                        }
                    }
                }).then((response) => {
                    this.items = response.data.data.getManyShopCategories
                })
            }
        },
        created() {
            this.fetchData()
        }
    }
</script>
