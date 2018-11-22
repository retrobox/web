<template>
    <div>
        <div class="cover-title">
            <div class="cover-title-content container mx-auto">
                <h1>{{$t('shop.checkout.choise')}}</h1>
            </div>
        </div>
        <div class="shop-checkout-container container mx-auto">
            <div class="shop-checkout" v-show="way === ''">
                <div class="shop-checkout-mosaic">
                    <div @click="stripe()" class="shop-checkout-item">
                        <i class="fas fa-credit-card icon"></i>
                        <span>{{$t('shop.checkout.card')}}</span>
                    </div>
                    <div @click="paypal()" class="shop-checkout-item">
                        <i class="fab fa-cc-paypal icon"></i>
                        <span>{{$t('shop.checkout.paypal')}}</span>
                    </div>
                </div>
            </div>
            <div class="shop-checkout" v-show="way !== ''">
                <div class="shop-checkout-mosaic">
                    <div class="shop-checkout-item">
                        <div class="icon">
                            <icon name="sync" spin scale="3"></icon>
                        </div>
                        <span>{{$t('shop.checkout.wait')}}</span>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between mt-6 ml-2">
                <button class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                        type="button"
                        @click="$router.push({name: 'ShopShippingDetails'})">
                    {{$t('shop.shipping_details.previous')}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./Header.vue"

    export default {
        name: 'ShopCheckout',
        data() {
            return {
                total: 0,
                items_sub_total: 0,
                success: true,
                way: ""
            }
        },
        watch: {},
        components: {
            "shop-header": Header
        },
        methods: {
            computeTotalPrice: function () {
                this.$store.state.cart.forEach((item) => {
                    this.items_sub_total = this.items_sub_total + item.price
                });
                this.items_sub_total = parseFloat(this.items_sub_total).toFixed(2);
                this.total = (parseFloat(this.items_sub_total) + parseFloat(this.$store.state.shipping_total_price)).toFixed(2);
            },
            paypal: function () {
                this.way = "paypal";
                //send a request to the API to get the consent screen url
                this.$apitator.post(this, "/paypal/get-url", {
                    items: this.$store.state.cart
                }, {
                    with_auth: true
                }).then((response) => {
                    console.log("paypal: getted url");
                    window.location = response.data.data.url
                }).catch((error) => {
                    console.log(error);
                    console.log("paypal: error");
                })
            },
            stripe: function () {
                this.way = 'stripe';
                this.computeTotalPrice();
                console.log(this.total);
                this.$checkout.open({
                    name: 'Retrobox',
                    currency: 'EUR',
                    amount: this.total * 100,
                    billingAddress: false,
                    panelLabel: this.$t('shop.checkout.pay'),
                    token: (token) => {
                        // var items = []
                        // this.$store.state.cart.forEach((item) => {
                        //   this.items.push(item.id)
                        // })
                        this.$apitator.post(this, "/stripe/execute", {
                            token: token.id,
                            email: token.email,
                            items: this.$store.state.cart
                        }, {
                            with_auth: true
                        }).then(() => {
                            console.log("stripe: success");
                            //empty the cart
                            this.$store.state.cart = [];
                            this.$router.push({name: 'ShopCheckoutSuccess'})

                        }).catch((error) => {
                            console.log(error);
                            console.log("stripe: error");
                        })
                    }
                });
            }
        },
        created() {
            this.$store.commit('SET_LOCATION', {
                root: this.$t('shop.title'),
                sub_root: this.$t('shop.shipping_details.title')
            });
            this.$store.commit('SET_TITLE', this.$t('shop.shipping_details.title'))
        }
    }
</script>
