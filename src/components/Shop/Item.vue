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
                        <h1>{{item.name}}</h1>
                    </div>
                </div>
                <div class="container mx-auto">
                    <shop-header></shop-header>
                    <div class="shop-item-container">
                        <div class="buy">
                            <ul class="list-reset flex border-b buy-nav">
                                <li class="-mb-px mr-1">
                                    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold"
                                       href="#">Version kité</a>
                                </li>
                                <li class="mr-1">
                                    <a class="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker"
                                       href="#">Version non kité</a>
                                </li>
                            </ul>
                            <div class="buy-content">
                                <div class="buy-description-container">
                                    <!-- <h3 class="buy-title">Retrobox, console</h3> -->
                                    <div class="buy-description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor
                                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur.
                                        </p>
                                        <ul>
                                            <li> Lorem ipsum dolor</li>
                                            <li> sit amet, consectetur</li>
                                            <li> Lorem ipsum dolor</li>
                                            <li> sit amet, consectetur</li>
                                        </ul>
                                    </div>
                                    <div class="buy-price">
                                        <span>€66.00</span>
                                    </div>
                                    <div class="buy-actions">
                                        <button class="action-buy bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 rounded inline-flex items-center button">
                                            <span><i class="fas fa-shopping-cart"></i></span>
                                            <span>Acheter</span>
                                        </button>
                                    </div>
                                    <div class="buy-ways-container">
                                        <!-- <div class="hint">Nous suportons ces moyens de payements :</div> -->
                                        <div class="buy-ways-mosaic">
                                            <div class="buy-way">
                                                <i class="fab fa-cc-paypal"></i>
                                            </div>
                                            <div class="buy-way">
                                                <i class="fab fa-cc-visa"></i>
                                            </div>
                                            <div class="buy-way">
                                                <i class="fab fa-cc-stripe"></i>
                                            </div>
                                            <div class="buy-way">
                                                <i class="fab fa-cc-amazon-pay"></i>
                                            </div>
                                            <div class="buy-way">
                                                <i class="fab fa-cc-paypal"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="buy-images-container">
                                    <div class="buy-images-content">
                                        <div class="buy-image-main">
                                            <img src="https://cdn.shopify.com/s/files/1/0020/9374/4179/products/storeIMAGE_1024x1024.png?v=1526207947">
                                        </div>
                                        <div class="buy-images-mosaic">
                                            <div class="buy-image-item">
                                                <img src="https://cdn.shopify.com/s/files/1/0020/9374/4179/products/storeIMAGE_1024x1024.png?v=1526207947">
                                            </div>
                                            <div class="buy-image-item">
                                                <img src="https://cdn.shopify.com/s/files/1/0020/9374/4179/products/weather_1024x1024.png?v=1526207947">
                                            </div>
                                            <div class="buy-image-item">
                                                <img src="https://cdn.shopify.com/s/files/1/0020/9374/4179/products/Fb_2.52.51_PM_1024x1024.png?v=1526207947">
                                            </div>
                                            <div class="buy-image-item">
                                                <img src="https://cdn.shopify.com/s/files/1/0020/9374/4179/products/storeIMAGE_1024x1024.png?v=1526207947">
                                            </div>
                                            <div class="buy-image-item">
                                                <img src="https://cdn.shopify.com/s/files/1/0020/9374/4179/products/weather_1024x1024.png?v=1526207947">
                                            </div>
                                            <div class="buy-image-item">
                                                <img src="https://cdn.shopify.com/s/files/1/0020/9374/4179/products/Fb_2.52.51_PM_1024x1024.png?v=1526207947">
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
                loading: true,
                item: []
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
                this.item = require('../../assets/content/' + this.$i18n.locale + '/shop.json').category[0].items[0]
                this.$store.commit('SET_TITLE', this.item.name)
                this.loading = false
            }
        },
        created() {
            this.fetchData()
        }
    }
</script>
