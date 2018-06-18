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
                        <h1>{{$t('shop.title')}}</h1>
                    </div>
                </div>
                <div class="container mx-auto">
                    <div class="shop-header-container">
                        <div class="shop-header-cart">
                            <span class="shop-header-cart-amount">{{ $tc('shop.cart.items', 88, { count: 80 }) }}</span>
                            <a @click=""
                               class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded button">
                                <icon name="shopping-cart" class="icon"></icon>
                                {{$t('shop.cart.title')}}
                            </a>
                        </div>
                    </div>
                    <div class="shop-index-container">
                        <div class="shop-index-empty-container" v-if="items.length == 0">
                            <div class="shop-index-empty-icon">
                                <icon name="times-circle" class="icon"></icon>
                            </div>
                            <div class="shop-index-empty-title">
                                <h3>
                                    {{$t('shop.index.empty')}}
                                </h3>
                            </div>
                        </div>
                        <div v-if="items.length > 0" class="shop-index-category-mosaic">
                            <div class="shop-index-category" v-for="category in items">
                                <h3 class="divider shop-index-category-title">{{category.title}}</h3>
                                <div class="shop-index-category-items">
                                    <div class="shop-card" v-for="item in category.items">
                                        <div class="shop-card-thumb" :style="'background-image: url(' + item.thumb + ')'"></div>
                                        <div class="shop-card-content">
                                            <h4 class="shop-card-title">{{item.name}}</h4>
                                            <p class="shop-card-description">{{item.description}}</p>
                                            <div class="shop-card-footer">
                                                <span class="price">€ {{item.price}}</span>
                                                <a href="#"
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
    export default {
        name: 'ShopIndex',
        data() {
            return {
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
                this.$store.commit('SET_LOCATION', {
                    root: this.$t('shop.title')
                })
                this.$store.commit('SET_TITLE', this.$t('shop.title'))
                this.items = require('../../assets/content/' + this.$i18n.locale + '/shop.json').category
                this.loading = false
            }
        },
        created() {
            this.fetchData()
        }
    }
</script>
