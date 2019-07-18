<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{ $t("shop.cart.title") }}</h1>
      </div>
    </div>
    <div class="container mx-auto">
      <CheckoutPage
        ref="checkoutPage"
        :step="2"
        :margin="false"
        @previous="$router.push('/shop/checkout/cart')"
        @next="onNext()">
        <div class="checkout-shipping">
          <div class="shipping-details">
            <div class="shipping-details-title-container">
              <h3 class="shipping-details-title">Your Shipping Details</h3>
            </div>
            <ShippingDetailsForm
              ref="shippingDetailsForm"
              @country="onCountryChanged"
              @saved="onShippingDetailsSaved()"
              @invalid="onShippingDetailsInvalid()" />
          </div>
          <div class="shipping-methods">
            <div class="shipping-methods-title-container">
              <h3 class="shipping-methods-title">Your shipping method</h3>
            </div>
            <div class="shipping-method-selector">
              <div 
                :class="{selected: shippingMethod === 'colissimo'}"
                class="shipping-method colissimo" 
                @click="shippingMethod = 'colissimo'">
                <div class="shipping-method-radio">
                  <input 
                    v-model="shippingMethod" 
                    name="shipping"
                    value="colissimo"
                    type="radio" />
                </div>
                <div class="shipping-method-content">
                  <div class="shipping-method-left">
                    <div class="shipping-method-image">
                      <img src="~/assets/images/colissimo.png" />
                    </div>
                  </div>
                  <div class="shipping-method-right">
                    <div class="shipping-method-description">
                      Livraison en 2 ans ouvré
                    </div>
                    <div class="shipping-method-price">
                      <span class="currency">€</span>
                      {{ colissimoPrice }}
                    </div>
                  </div>
                </div>
              </div>
              <div 
                :class="{selected: shippingMethod === 'dhl'}"
                class="shipping-method dhl" 
                @click="shippingMethod = 'dhl'">
                <div class="shipping-method-radio">
                  <input 
                    v-model="shippingMethod"
                    value="dhl"
                    name="shipping" 
                    type="radio" />
                </div>
                <div class="shipping-method-content">
                  <div class="shipping-method-left">
                    <div class="shipping-method-image">
                      <i class="icon fab fa-dhl"></i>
                    </div>
                  </div>
                  <div class="shipping-method-right">
                    <div class="shipping-method-description">
                      Livraison en 4 décénnies ouvré
                    </div>
                    <div class="shipping-method-price">
                      <span class="currency">€</span>
                      {{ dhlPrice }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="checkout-bill mt-4">
          <div class="checkout-price-container checkout-small-price">
            <div class="checkout-text">
              Sous total
            </div>
            <div class="checkout-price">
              <span class="currency">€</span> {{ $store.state.checkout.subTotal }}
            </div>
          </div>
          <div class="checkout-price-container checkout-small-price">
            <div class="checkout-text">
              Shipping
            </div>
            <div class="checkout-price">
              <span class="currency">€</span> {{ $store.state.checkout.shippingPrice }}
            </div>
          </div>
          <div class="checkout-price-container checkout-big-price">
            <div class="checkout-text">
              Total
            </div>
            <div class="checkout-price">
              <span class="currency">€</span> {{ $store.state.checkout.total }}
            </div>
          </div>
        </div>
      </CheckoutPage>
    </div>
  </div>
</template>

<script>
import Icon from "~/components/Icon";
import CheckoutPage from "~/components/CheckoutPage";
import ShopCard from "~/components/ShopCard";
import ShippingDetailsForm from "~/components/ShippingDetailsForm";

export default {
  middleware: "authenticated",
  components: { CheckoutPage, ShopCard, Icon, ShippingDetailsForm },
  head() {
    return {
      title: this.$t('shop.shipping_details.title')
    };
  },
  data() {
    return {
      show: false,
      shippingMethod: 'colissimo',
      colissimoPrice: 0,
      dhlPrice: 0
    };
  },
  watch: {
    'shippingMethod': function() {
      this.updateShippingPrice()
    }
  },
  methods: {
    onNext() {
      this.$refs.checkoutPage.enableNextLoading()
      this.$refs.shippingDetailsForm.save()
    },
    onShippingDetailsSaved() {
      this.$refs.checkoutPage.disableNextLoading()
      this.$router.push('/shop/checkout/payment')
    },
    onShippingDetailsInvalid() {
      this.$refs.checkoutPage.disableNextLoading()
    },
    onCountryChanged(country) {
      this.$store.commit('SET_CHECKOUT_COUNTRY', country)
      this.fetchShippingPrices()
    },
    fetchShippingPrices() {
      let params = new URLSearchParams()
      params.append('country', this.$store.state.checkout.country)
      params.append('weight', this.$store.state.checkout.totalWeight)
      this.$apitator.get('/shop/shipping-prices?' + params.toString()).then(res => {
        this.colissimoPrice = res.data.data.colissimo
        this.dhlPrice = res.data.data.dhl
        this.updateShippingPrice()
      })
    },
    updateShippingPrice() {
      let price = 0;
      switch (this.shippingMethod) {
        case 'colissimo':
          price = this.colissimoPrice
          break;
        case 'dhl': 
          price = this.dhlPrice
          break;
      }
      this.$store.commit('SET_CHECKOUT_SHIPPING_METHOD', [this.shippingMethod, price])
    }
  }
};
</script>
