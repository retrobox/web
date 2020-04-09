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
    <client-only>
    </client-only>
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
          shipping_country: this.$store.state.checkout.country,
          order_note: this.$store.state.orderNote
        }, {withAuth: true}).then((response) => {
          window.location = response.data.data.url
        }).catch((error) => {
          console.log(error);
          console.log("paypal: error");
        })
      },
      stripe: function () {
        this.way = 'stripe'
        this.$apitator.post('/stripe/create', {
          items: this.$store.state.cart,
          shipping_method: this.$store.state.checkout.shippingMethod,
          shipping_country: this.$store.state.checkout.country,
          order_note: this.$store.state.orderNote
        }, {withAuth: true}).then((response) => {
          console.log('stripe session creation response', response.data)
          let script = document.createElement('script')
          script.src = "https://js.stripe.com/v3/"
          script.onload = () => {
            console.log('script load!')
            let stripe = Stripe(this.$env.STRIPE_PUBLIC);
            stripe.redirectToCheckout({
              sessionId: response.data.data.stripe_session.id
            }).then((result) => {
              console.log('> Stripe checkout error', result)
            })
          }
          document.body.append(script)
        }).catch((error) => {
          console.log("> Stripe session creation error", error);
        })
      },
      stripeHasFinished: function ({token}) {
        // this.stripeLoading = true
        // this.$apitator.post('/stripe/execute', {
        //   token: token.id,
        //   email: token.email,
        //   items: this.$store.state.cart,
        //   shipping_method: this.$store.state.checkout.shippingMethod,
        //   shipping_country: this.$store.state.checkout.country,
        //   order_note: this.$store.state.orderNote
        // }, { withAuth: true }).then((response) => {
        //   console.log("stripe: success");
        //   console.log(response)
        //   this.$router.push(this.localePath('shop-checkout-success'))
        // }).catch((error) => {
        //   this.way = '';
        //   this.stripeLoading = false;
        //   console.log(error);
        //   console.log("stripe: error");
        // })
      },
      stripeClosed: function () {
        if (this.stripeLoading === false) {
          this.way = '';
        }
      }
    }
  }
</script>
