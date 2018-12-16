<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{ $t('shop.checkout.choise') }}</h1>
      </div>
    </div>
    <div class="shop-checkout-container container mx-auto">
      <ShopHeader />
      <div
        v-show="way === ''"
        class="shop-checkout">
        <div class="shop-checkout-mosaic">
          <div
            class="shop-checkout-item"
            @click="stripe()">
            <i class="fas fa-credit-card icon"></i>
            <span>{{ $t('shop.checkout.card') }}</span>
          </div>
          <div
            class="shop-checkout-item"
            @click="paypal()">
            <Icon value="fab fa-cc-paypal"/>
            <span>{{ $t('shop.checkout.paypal') }}</span>
          </div>
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
      <div class="flex items-center justify-between mt-6 ml-2">
        <button
          class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          type="button"
          @click="$router.push('/shop/shipping-details')">
          {{ $t('shop.shipping_details.previous') }}
        </button>
      </div>
    </div>
    <no-ssr>
      <vue-stripe-checkout
        ref="stripe"
        :billing-address="false"
        :amount="total * 100"
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
  import Icon from "../../components/Icon"
  import ShopHeader from "../../components/ShopHeader"

  export default {
    name: 'ShopCheckout',
    components: {
      ShopHeader,
      Icon
    },
    data() {
      return {
        total: 0,
        items_sub_total: 0,
        success: true,
        way: ''
      }
    },
    watch: {},
    head () {
      return {
        title: this.$t('shop.checkout.choise')
      }
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
        this.way = 'paypal';
        //send a request to the API to get the consent screen url
        this.$apitator.post('/paypal/get-url', {
          items: this.$store.state.cart
        }, {withAuth: true}).then((response) => {
          window.location = response.data.data.url
        }).catch((error) => {
          console.log(error);
          console.log("paypal: error");
        })
      },
      stripe: function () {
        this.way = 'stripe';
        this.computeTotalPrice();
        this.$refs.stripe.open()
      },
      stripeHasFinished: function ({token}) {
        this.$apitator.post('/stripe/execute', {
          token: token.id,
          email: token.email,
          items: this.$store.state.cart
        }, { withAuth: true }).then(() => {
          console.log("stripe: success");
          this.$store.commit('EMPTY_CART')
          this.$router.push('/shop/checkout-success')
        }).catch((error) => {
          console.log(error);
          console.log("stripe: error");
        })
      },
      stripeClosed: function () {
        this.way = '';
      }
    }
  }
</script>
