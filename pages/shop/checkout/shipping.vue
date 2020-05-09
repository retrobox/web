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
        :next="$store.state.checkout.shippingPrice !== 0"
        @previous="$router.push(localePath('shop-checkout-cart'))"
        @next="onNext()">
        <div class="checkout-shipping">
          <div class="shipping-details">
            <div class="shipping-details-title-container">
              <h3 class="shipping-details-title">
                {{ $t('shop.shipping_details.title') }}
              </h3>
            </div>
            <ShippingDetailsForm
              ref="shippingDetailsForm"
              @detailsChanged="onDetailsChanged"
              @fetched="onDetailsChanged"
              @saved="onShippingDetailsSaved()"
              @invalid="onShippingDetailsInvalid()" />
          </div>
          <div class="shipping-methods">
            <div class="shipping-methods-title-container">
              <h3 class="shipping-methods-title">
                {{ $t('shop.shipping_details.method') }}
              </h3>
            </div>
            <div
              v-show="!shippingMethodLoading && countrySelected"
              class="shipping-method-selector">
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
                      {{ $t('shop.shipping_details.methods.colissimo') }}
                    </div>
                    <div
                      v-if="colissimoPrice !== 0"
                      class="shipping-method-price">
                      <span class="currency">€</span>
                      {{ colissimoPrice }}
                    </div>
                  </div>
                </div>
              </div>
              <div 
                :class="{selected: shippingMethod === 'chronopost' && chronopostPrice !== 0, disabled: chronopostPrice === 0}"
                class="shipping-method chronopost"
                @click="chronopostPrice !== 0 ? shippingMethod = 'chronopost' : null">
                <div class="shipping-method-radio">
                  <input
                    :disabled="chronopostPrice === 0"
                    v-model="shippingMethod"
                    value="chronopost"
                    name="shipping" 
                    type="radio" />
                </div>
                <div class="shipping-method-content">
                  <div class="shipping-method-left">
                    <div class="shipping-method-image">
                      <img src="~/assets/images/chronopost.png" />
                    </div>
                  </div>
                  <div class="shipping-method-right">
                    <div
                      v-if="chronopostPrice === 0"
                      class="shipping-method-description">
                      {{ $t('shop.shipping_details.methods.disabled') }}
                    </div>
                    <div
                      v-else
                      class="shipping-method-description">
                      {{ $t('shop.shipping_details.methods.chronopost') }}
                    </div>
                    <div
                      v-if="chronopostPrice !== 0"
                      class="shipping-method-price">
                      <span class="currency">€</span>
                      {{ chronopostPrice }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-show="shippingMethodLoading"
              class="loading-overlay"
              style="height: 272px;">
              <div class="loading">
                <Icon
                  value="fas fa-sync"
                  spin />
              </div>
            </div>
            <div
              v-show="!countrySelected"
              class="loading-overlay"
              style="height: 272px;">
              <div class="text-center text-orange-dark">
                <div class="text-3xl mb-3">
                  <Icon value="fas fa-globe-europe" />
                </div>
                <div
                  class="m-auto"
                  style="width: 80%">
                  {{ $t('shop.checkout.choose_country') }}
                </div>
              </div>
            </div>

            <div class="order-note-container">
              <div class="order-note-title-container">
                <h3 class="order-note-title">
                  {{ $t('shop.order-note.title') }}
                </h3>
              </div>
              <div class="order-note-textarea">
                <textarea 
                  v-model="orderNote"
                  :placeholder="$t('shop.order-note.description')"
                  class="input-textarea"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="checkout-bill mt-4">
          <div class="checkout-price-container checkout-small-price">
            <div class="checkout-text">
              {{ $t('shop.cart.sub_total') }}
            </div>
            <div class="checkout-price">
              <span class="currency">€</span> {{ $store.state.checkout.subTotal }}
            </div>
          </div>
          <div class="checkout-price-container checkout-small-price">
            <div class="checkout-text">
              {{ $t('shop.cart.shipping_price') }}
            </div>
            <div class="checkout-price">
              <span class="currency">€</span> {{ $store.state.checkout.shippingPrice }}
            </div>
          </div>
          <div class="checkout-price-container checkout-big-price">
            <div class="checkout-text">
              {{ $t('shop.cart.total') }}
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
  data: () => ({
    show: false,
    shippingMethod: 'colissimo',
    colissimoPrice: 0,
    chronopostPrice: 0,
    orderNote: '',
    shippingMethodLoading: false,
    countrySelected: false
  }),
  watch: {
    'shippingMethod': function() {
      this.updateShippingPrice()
    }
  },
  created() {
    this.$store.commit('SET_CHECKOUT_SHIPPING_METHOD', ['', 0])
    this.orderNote = this.$store.state.orderNote
  },
  methods: {
    onNext() {
      this.$refs.checkoutPage.enableNextLoading()
      this.$refs.shippingDetailsForm.save()
      this.$store.commit('SET_ORDER_NOTE', this.orderNote)
    },
    onShippingDetailsSaved() {
      this.$refs.checkoutPage.disableNextLoading()
      this.$router.push(this.localePath('shop-checkout-payment'))
    },
    onShippingDetailsInvalid() {
      this.$refs.checkoutPage.disableNextLoading()
    },
    onDetailsChanged(details) {
      if (details.country == "") {
        this.countrySelected = false
        return
      }
      this.shippingMethodLoading = true
      this.countrySelected = true
      this.$store.commit('SET_CHECKOUT_SHIPPING_DETAILS', details)
      this.fetchShippingPrices()
    },
    fetchShippingPrices() {
      let params = new URLSearchParams()
      params.append('country', this.$store.state.checkout.country)
      params.append('weight', this.$store.state.checkout.totalWeight)
      params.append('postal_code', this.$store.state.checkout.postalCode)
      this.$apitator.get('/shop/shipping-prices?' + params.toString()).then(res => {
        // prices fetched are in cents, so we need to convert those in common price unit
        this.colissimoPrice = parseFloat((res.data.data.colissimo / 100).toFixed(2))
        this.chronopostPrice = parseFloat((res.data.data.chronopost / 100).toFixed(2))
        if (this.chronopostPrice === 0) {
          this.shippingMethod = 'colissimo'
        }
        this.updateShippingPrice()
        this.shippingMethodLoading = false
      })
    },
    updateShippingPrice() {
      let price = 0;
      switch (this.shippingMethod) {
        case 'colissimo':
          price = this.colissimoPrice
          break;
        case 'chronopost': 
          price = this.chronopostPrice
          break;
      }
      this.$store.commit('SET_CHECKOUT_SHIPPING_METHOD', [this.shippingMethod, price])
    }
  }
};
</script>
