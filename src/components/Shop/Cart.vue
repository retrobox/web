<template>
    <div>
        <fade-transition group>
            <div v-if="$store.state.loading" key="$store.state.loading">
                <div class="loading">
                    <icon name="sync" spin scale="3"></icon>
                </div>
            </div>
            <div v-if="$store.state.loading === false" key="$store.state.loading">
                <div class="cover-title">
                    <div class="cover-title-content container mx-auto">
                        <h1>{{$t('shop.cart.title')}}</h1>
                    </div>
                </div>
                <div class="container mx-auto shop-cart-container">
                    <div class="shop-empty-container" v-if="$store.state.cart.length === 0">
                        <div class="shop-empty-icon">
                            <icon name="times-circle" class="icon"></icon>
                        </div>
                        <div class="shop-empty-title">
                            <h3>
                                {{$t('shop.cart.empty')}}
                            </h3>
                        </div>
                    </div>
                    <div v-if="$store.state.cart.length > 0">
                        <div class="shop-cart-list list">
                            <div class="list-head">
                                <div>{{$t('shop.item.title')}}</div>
                                <div>{{$t('shop.item.version')}}</div>
                                <div>{{$t('shop.item.price')}}</div>
                                <div></div>
                            </div>
                            <div class="list-row" v-for="item in $store.state.cart">
                                <div>{{item.title}} <span>&nbsp;</span> <span v-if="item.custom_options !== undefined"> ({{item.custom_options.storage}} Gb)</span>
                                </div>
                                <div>{{item.version}}</div>
                                <div>€ {{item.price}}</div>
                                <div class="shop-cart-actions">
                                    <a @click="$router.push({name: 'ShopItem', params: {slug: item.slug}})"
                                       class="bg-grey hover:bg-grey-dark text-white font-bold py-1 px-2 rounded button"
                                       :title="$t('shop.cart.show')">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                    <a @click="toggleCart(item)"
                                       :title="$t('shop.cart.remove')"
                                       class="bg-grey hover:bg-grey-dark text-white font-bold py-1 px-2 rounded button">
                                        <i class="fas fa-times"></i>
                                    </a></div>
                            </div>
                            <div class="list-row" v-show="$store.state.cart.length > 1">
                                <div>{{$t('shop.cart.sub_total')}}</div>
                                <div></div>
                                <div>€ {{items_sub_total}}</div>
                                <div></div>
                            </div>
                            <div class="list-row">
                                <div>{{$t('shop.cart.shipping_price')}}</div>
                                <div></div>
                                <div>€ {{$store.state.shipping_total_price}}</div>
                                <div></div>
                            </div>
                            <div class="list-row total">
                                <div>{{$t('shop.cart.total')}}</div>
                                <div></div>
                                <div>€ {{total}}</div>
                                <div></div>
                            </div>
                        </div>
                        <div class="shop-cart-bill-container">
                            <div class="shop-cart-bill-amount">
                                <span>{{ $tc('shop.cart.items', $store.state.cart.length, { count: $store.state.cart.length }) }}</span>
                            </div>
                            <div class="shop-cart-bill-checkout">
                                <a @click="checkout()"
                                   class="checkout-button bg-blue hover:bg-blue-light text-white font-bold py-4 px-8 rounded inline-flex items-center button">
                                    <icon name="shopping-cart" class="icon"></icon>
                                    {{$t('shop.checkout.title')}}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </fade-transition>
    </div>
</template>

<script>
    import Header from "./Header.vue"

    export default {
        name: 'Cart',
        data() {
            return {
                total: 0,
                items_sub_total: 0,
                shipping_prices: []
            }
        },
        watch: {
            '$store.state.cart'() {
                this.computePrices()
            }
        },
        components: {
            "shop-header": Header
        },
        methods: {
            toggleCart: function (item) {
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
            checkout: function () {
                if (this.$cookie.get('user_token') == null) {
                    //call login function
                    let url = this.$router.resolve({
                        name: 'ShopShippingDetails'
                    }).href;
                    this.$store.state.login_redirect_route = window.location.origin + url;
                    this.$modal.show('login_or_register')
                } else {
                    this.$router.push({name: 'ShopShippingDetails'})
                }
            },
            computePrices: function () {
                this.$store.state.shipping_total_price = 0.00;
                this.items_sub_total = 0.00;
                this.$store.state.cart.forEach((item) => {
                    this.items_sub_total = this.items_sub_total + item.price;
                    this.shipping_prices.forEach((price) => {
                        if (price.to >= item.weight && price.from <= item.weight){
                            this.$store.state.shipping_total_price += parseFloat(price.cost)
                        }
                    })
                });
                this.items_sub_total = this.items_sub_total.toFixed(2);
                this.total = parseFloat(parseFloat(this.items_sub_total) + parseFloat(this.$store.state.shipping_total_price)).toFixed(2);
            }
        },
        created() {
            //get the shipping price
            this.$apitator.get(this, '/shop/prices').then((response) => {
                this.shipping_prices = response.data.data.shipping_prices;
                this.computePrices()
            });
            this.$store.commit('SET_LOCATION', {
                root: this.$t('shop.title'),
                sub_root: this.$t('shop.cart.title')
            });
            this.$store.commit('SET_TITLE', this.$t('shop.cart.title'))
        }
    }
</script>
