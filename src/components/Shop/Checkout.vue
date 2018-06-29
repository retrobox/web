<template>
    <div>
        <div class="cover-title">
            <div class="cover-title-content container mx-auto">
                <h1>{{$t('shop.checkout.choise')}}</h1>
            </div>
        </div>
        <div class="shop-checkout-container container mx-auto">
           <div class="shop-checkout">
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
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import Header from "./Header.vue"
    export default {
        name: 'ShopCheckout',
        data() {
            return {
              total: 0,
              success: true
            }
        },
        watch: {
        },
        components: {
            "shop-header": Header
        },
        methods: {
          paypal: function () {

          },
          stripe: function () {
            this.total = 0
            this.$store.state.cart.forEach((item) => {
              this.total = this.total + item.price
            })
            this.total = parseFloat(parseFloat(this.total) * 100)
            this.$checkout.open({
              name: 'Retrobox',
              currency: 'EUR',
              amount: this.total,
              billingAddress: false,
              panelLabel: this.$t('shop.checkout.pay'),
              token: (token) => {
                // var items = []
                // this.$store.state.cart.forEach((item) => {
                //   this.items.push(item.id)
                // })
                this.$apitator.post(this, "/stripe/execute", {
                  token: token.id,
                  items: this.$store.state.cart
                },{
                  with_auth: true
                }).then(() => {
                  console.log("stripe: success");
                  //empty the cart
                  // this.$store.state.cart = []
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
              sub_root: this.$t('shop.checkout.title')
          })
          this.$store.commit('SET_TITLE', this.$t('shop.checkout.title'))
        }
    }
</script>
