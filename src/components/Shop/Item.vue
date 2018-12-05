<template>
    <div>
        <fade-transition group>
            <div v-if="$store.state.loading" key="$store.state.loading">
                <div class="loading">
                    <icon name="sync" spin scale="3"></icon>
                </div>
            </div>
            <div v-if="$store.state.loading === false" key="$store.state.loading">
                <div v-if="item == null">
                    <div>
                        <not-found/>
                    </div>
                </div>
                <div v-else>
                    <div class="cover-title">
                        <div class="cover-title-content container mx-auto">
                            <h1>{{item.title}}</h1>
                        </div>
                    </div>
                    <div class="container mx-auto">
                        <shop-header></shop-header>
                        <div class="shop-item-container">
                            <div class="buy">
                                <div class="buy-content">
                                    <div class="buy-description-container">
                                        <!-- <h3 class="buy-title">Retrobox, console</h3> -->
                                        <div class="buy-description" v-html="item.description_long">
                                        </div>
                                        <div class="buy-custom-container" v-if="item.category.is_customizable">
                                            <!--custom sd size-->
                                            <div class="buy-custom-type">
                                                <div class="buy-custom-title">{{$t('shop.item.custom.storage')}}</div>
                                                <div class="buy-custom-mosaic storage">
                                                    <div class="buy-custom-item"
                                                         @click="selectStorage(storage)"
                                                         v-bind:class="{'selected': selectedStorage == storage}"
                                                         v-for="storage in storages">
                                                        {{storage}} Go
                                                    </div>
                                                </div>
                                            </div>

                                            <!--custom color-->
                                            <div class="buy-custom-type">
                                                <div class="buy-custom-title">{{$t('shop.item.custom.color')}}</div>
                                                <div class="buy-custom-mosaic button-colors">
                                                    <div class="buy-custom-item"
                                                         :style="'background-color:' + color.color"
                                                         v-for="color in colors"
                                                         v-bind:class="{'selected': color.color == selectedColor}"
                                                         @click="selectColor(color.color)">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="buy-custom-type">
                                              <div class="buy-custom-title">{{$t('shop.item.custom.model')}}</div>
                                              <div class="buy-custom-mosaic">
                                                <ul class="list-reset" v-if="item.show_version">
                                                    <!-- <li class="-mb-px mr-1">
                                                      <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold" href="#">Version kité</a>
                                                    </li> -->
                                                <li class="mr-1" style="display: inline" v-for="link in item.category.items"
                                                  v-bind:class="{'-mb-px': link.id == item.id }">
                                                  <a class="bg-grey-lighter inline-block py-2 px-4 text-black hover:text-blue-darker rounded"
                                                    v-bind:class="{'border-4 border-blue-dark': link.id == item.id }"
                                                    @click="$router.push({name: 'ShopItem', params: {slug:link.slug}})">{{link.version}}</a>
                                                  </li>
                                                  </ul>
                                                </div>
                                              </div>
                                        <div class="buy-price">
                                            <span>€ {{price}}</span>
                                        </div>
                                        <div class="buy-actions">
                                            <button class="action-buy bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded inline-flex items-center button"
                                                    @click="toggleCart(item)">
                                                <span><i class="fas fa-shopping-cart"></i></span>
                                                <span v-if="$store.state.cart[this.$store.state.cart.indexOf(item)] == undefined">{{$t('shop.cart.add')}}</span>
                                                <span v-else>{{$t('shop.cart.remove')}}</span>
                                            </button>
                                        </div>
                                        <div class="social-sharing" style="margin-top: 1.25em;">
                                          <span>Partager</span>
                                          <div class="share">
                                              <ul style="margin-top: 0.50em;">
                                                  <li class="facebook">
                                                      <a :href="$t('facebook').link" :title="$t('facebook').title">
                                                          <icon name="brands/facebook" class="icon"></icon>
                                                      </a>
                                                  </li>
                                                  <li class="twitter">
                                                      <a :href="$t('twitter').link" :title="$t('twitter').title">
                                                          <icon name="brands/twitter" class="icon"></icon>
                                                      </a>
                                                  </li>
                                                  <li class="github">
                                                      <a :href="$t('github').link" :title="$t('github').title">
                                                          <icon name="brands/github" class="icon"></icon>
                                                      </a>
                                                  </li>
                                                  <li class="discord">
                                                      <a :href="$t('discord').link" :title="$t('discord').title">
                                                          <icon name="brands/discord" class="icon"></icon>
                                                      </a>
                                                  </li>
                                              </ul>
                                          </div>
                                        </div>
                                      <div class="buy-advantages">
                                        <div class="buy-ways-container">
                                            <!-- <div class="hint">Nous suportons ces moyens de payements :</div> -->
                                            <div class="buy-ways-mosaic">
                                                <div class="buy-way">
                                                    <i class="fas fa-lock"></i>
                                                    <div class="buy-ways-title">Paiement sécurisé par Carte via Stripe, Paypal, Paysafecard </div>
                                                </div>
                                            </div>
                                          <div class="buy-ways-mosaic">
                                            <div class="buy-way">
                                                <i class="fas fa-truck"></i>
                                                <div class="buy-ways-title">Livraison suivie sous 10 jours </div>
                                            </div>
                                          </div>
                                              <div class="buy-ways-mosaic">
                                                <div class="buy-way">
                                                  <img src="../../assets/img/fr.png">
                                                <div class="buy-ways-title">Assemblé en France</div>
                                                </div>
                                              </div>
                                            </div>
                                    <div class="buy-images-container">
                                        <div class="buy-images-content">
                                            <div class="buy-image-main">
                                                <img :src="main[0].url" @click="showImage(main[0].url)" alt="">
                                            </div>
                                            <div class="buy-images-mosaic">
                                                <div class="buy-image-item" v-for="image in not_main">
                                                    <img :src="image.url" @click="showImage(image.url)" alt="">
                                                </div>
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
        <modal name="show_image" class="modal show-image-modal">
            <div class="modal-container">
                <div class="show-image-container">
                    <img :src="to_show" alt="">
                </div>
            </div>
            <div class="button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 cancel-button"
                 @click="$modal.hide('show_image')">
                {{$t('close')}}
            </div>
        </modal>
    </div>
</template>

<script>
    import axios from "axios"
    import marked from "marked"
    import Header from "./Header.vue"
    import NotFound from "../NotFound.vue";

    export default {
        name: 'ShopIndex',
        data() {
            return {
                item: {
                    category: {}
                },
                //url of image to show in modal
                to_show: "",
                selectedStorage: 8,
                //in gb
                storages: [
                    8,
                    16,
                    32
                ],
                //in hex
                colors: [
                    {color: "#ff4c4c", name: this.$t('shop.item.custom.colors.red')},
                    {color: "#ffff4c", name: this.$t('shop.item.custom.colors.yellow')},
                    {color: "#4dff4c", name: this.$t('shop.item.custom.colors.green')},
                    {color: "#4d4cff", name: this.$t('shop.item.custom.colors.blue')},
                    {color: "#ffffff", name: this.$t('shop.item.custom.colors.white')},
                    {color: "#333333", name: this.$t('shop.item.custom.colors.black')}
                ],
                selectedColor: "#ff4c4c",
                main: [
                    {url: ""}
                ],
                not_main: [],
                //showed price
                price: 0,
                original_price: 0,
                storage_prices: []
            }
        },
        watch: {
            '$i18n.locale'() {
                this.fetchData()
            },
            '$route.params'() {
                this.fetchData()
            },
            'selectedStorage'() {
                this.price = this.original_price;
                this.price = this.price + this.storage_prices[this.selectedStorage];
                this.price = parseFloat(this.price.toFixed(2))
            }
        },
        components: {
            "shop-header": Header,
            "not-found": NotFound
        },
        methods: {
            showImage: function (url) {
                this.to_show = url
                this.$modal.show('show_image')
            },
            selectStorage: function (size) {
                this.selectedStorage = size
            },
            selectColor: function (color) {
                this.selectedColor = color
            },
            toggleCart: function (item) {
                item.price = this.price;
                if (item.category.is_customizable) {
                    item.custom_options = {
                        storage: this.selectedStorage,
                        color: this.selectedColor
                    }
                }
                this.$store.commit('CART_TOGGLE', item);
                if (this.$store.state.cart[this.$store.state.cart.indexOf(item)] === undefined) {
                    this.$store.commit('ADD_ALERT', {
                        type: 'success',
                        title: this.$t('shop.cart.removed.title'),
                        description: this.$t('shop.cart.removed.description')
                    })
                } else {
                    this.$store.commit('ADD_ALERT', {
                        type: 'success',
                        title: this.$t('shop.cart.added.title'),
                        description: this.$t('shop.cart.added.description')
                    })
                }
            },
            fetchData: function () {
                this.$store.commit('SET_LOCATION', {
                    root: this.$t('shop.title')
                });

                this.$apitator.get(this, "/shop/" + this.$i18n.locale + "/item/" + this.$route.params.slug).then((response) => {
                    //fetch the price of the storage
                    this.item = response.data.data.item;
                    if (this.item.category.is_customizable == true) {
                        this.$apitator.get(this, "/shop/prices").then((response) => {
                            this.storage_prices = response.data.data.storage_prices;
                            this.renderItem()
                        })
                    }else {
                        this.renderItem()
                    }
                })
            },
            renderItem: function () {
                if (this.item == null) {
                    this.$store.commit('SET_TITLE', this.$t('not-found.title'))
                } else {
                    this.item.description_long = marked(this.item.description_long);
                    this.not_main = this.item.images.filter((item) => {
                        return item.is_main == false
                    });
                    this.main = this.item.images.filter((item) => {
                        return item.is_main == true
                    });
                    this.price = this.item.price;
                    this.original_price = this.item.price;

                    this.$store.commit('SET_TITLE', this.item.title);
                    this.$store.commit('SET_LOCATION', {
                        root: this.$t('shop.title'),
                        sub_root: this.item.title
                    })
                }
            }
        },
        created() {
            this.fetchData()
        }
    }
</script>
