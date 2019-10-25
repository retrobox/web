<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{ $t('shop.checkout.choise') }}</h1>
      </div>
    </div>
    <div class="shop-checkout-container container mx-auto">
      
      <CheckoutPage
        ref="checkoutPage"
        :step="3"
        @previous="$router.push(localePath('shop-checkout-shipping'))">
        <div
          v-show="way === ''"
          class="shop-checkout">
          <div class="shop-checkout-mosaic">
            <button
              class="shop-checkout-item"
              @click="stripe()">
              <i class="fas fa-credit-card icon"></i>
              <span>{{ $t('shop.checkout.card') }}</span>
            </button>
            <button
              class="shop-checkout-item"
              @click="paypal()">
              <Icon value="fab fa-cc-paypal"/>
              <span>{{ $t('shop.checkout.paypal') }}</span>
            </button>
          </div>
        </div>
        <div
          v-show="way !== ''"
          class="shop-checkout">
          <div class="shop-checkout-mosaic">
            <div class="shop-checkout-item">
              <div class="icon icon-loader">
                <Icon
                  value="fas fa-sync"
                  spin />
              </div>
              <span>{{ $t('shop.checkout.wait') }}</span>
            </div>
          </div>
        </div>
      </CheckoutPage>
    </div>
    <no-ssr>
      <vue-stripe-checkout
        ref="stripe"
        :billing-address="false"
        :amount="$store.state.checkout.total * 100"
        :email="$store.state.user.email"
        image="https://i.imgur.com/sEtYLqg.png"
        name="Retrobox"
        currency="EUR"
        allow-remember-me
        @done="stripeHasFinished"
        @closed="stripeClosed"
        @canceled="stripeClosed"
      ></vue-stripe-checkout>
    </no-ssr>
  </div>
</template>

<script>
  import Icon from "~/components/Icon"
  import CheckoutPage from "~/components/CheckoutPage"

  export default {
    middleware: "authenticated",
    components: {
      CheckoutPage,
      Icon
    },
    data() {
      return {
        success: true,
        way: '',
        stripeLoading: false
      }
    },
    watch: {},
    head () {
      return {
        title: this.$t('shop.checkout.choise')
      }
    },
    methods: {
      paypal: function () {
        this.way = 'paypal'
        this.$apitator.post('/paypal/get-url', {
          items: this.$store.state.cart,
          shipping_method: this.$store.state.checkout.shippingMethod,
          shipping_country: this.$store.state.checkout.country
        }, {withAuth: true}).then((response) => {
          console.log('paypal Backend response', response.data)
          window.location = response.data.data.url
        }).catch((error) => {
          console.log(error);
          console.log("paypal: error");
        })
      },
      stripe: function () {
        this.way = 'stripe'
        this.$refs.stripe.open()
      },
      stripeHasFinished: function ({token}) {
        this.stripeLoading = true
        this.$apitator.post('/stripe/execute', {
          token: token.id,
          email: token.email,
          items: this.$store.state.cart,
          shipping_method: this.$store.state.checkout.shippingMethod,
          shipping_country: this.$store.state.checkout.country
        }, { withAuth: true }).then((response) => {
          console.log("stripe: success");
          console.log(response)
          //this.$router.push(this.localePath('shop-checkout-success'))
        }).catch((error) => {
          this.way = '';
          this.stripeLoading = false;
          console.log(error);
          console.log("stripe: error");
        })
      },
      stripeClosed: function () {
        if (this.stripeLoading === false) {
          this.way = ''; 
        }
      }
    }
  }
</script>
