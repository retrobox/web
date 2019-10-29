<template>
  <div>
    <div
      v-if="$store.state.cart.length === 0 && show"
      class="shop-empty-container checkout-cart-empty"
    >
      <div class="shop-empty-icon">
        <Icon value="fas fa-times-circle" />
      </div>
      <div class="shop-empty-title">
        <h3>Votre panier est vide</h3>
      </div>
    </div>
    <div v-if="$store.state.cart.length > 0 && show">
      <div class="checkout-steps">
        <div 
          :class="{actived: step === 1}"
          class="checkout-step"
          @click="goToCart()">
          <span class="checkout-step-number">1.</span>
          Panier
        </div>
        <div class="checkout-step-sep">
          <Icon
            value="fas fa-chevron-right" />
        </div>
        <div
          :class="{disabled: step === 2, actived: step === 2}"
          class="checkout-step"
          @click="shipping()">
          <span class="checkout-step-number">2.</span>
          Livraison
        </div>
        <div class="checkout-step-sep">
          <Icon
            value="fas fa-chevron-right" />
        </div>
        <div 
          :class="{actived: step === 3}"
          class="checkout-step disabled">
          <span class="checkout-step-number">3.</span>
          Paiment
        </div>
      </div>
      <div
        :class="{'checkout-cart': !margins}">
        <slot />
        <div 
          :class="{single: step === 1, double: step > 1}"
          class="checkout-buttons">
          <button
            v-if="step > 1"
            class="button button-secondary button-big"
            @click="goToPrevious()">
            <Icon value="fas fa-backward" />
            {{ $t("shop.shipping_details.previous") }}
          </button>
          <button
            v-if="step < 3"
            :class="{'disabled': !next}"
            class="button button-primary button-big"
            @click="goToNext()">
            <Icon
              v-if="nextLoading"
              spin
              value="fas fa-sync" />
            <Icon
              v-else
              value="fas fa-forward" />
            {{ $t("shop.shipping_details.next") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "~/components/Icon";

export default {
  components: { Icon },
  props: {
    step: { type: Number, default: 0 },
    margins: { type: Boolean, default: true },
    next: { type: Boolean, default: true }
  },
  data: () => ({
    show: false,
    nextLoading: false
  }),
  watch: {
    '$store.state.cart': function() {
      this.computePrices()
    }
  },
  mounted() {
    if (!this.$isServer) {
      this.show = true;
      //this.computePrices()
    }
  },
  methods: {
    goToCart() {
      if (this.step === 2 || this.step === 3) {
        this.$router.push(this.localePath('shop-checkout-cart'))
      }
    },
    shipping() {
      if (this.step === 1) {
        this.$emit('next')
      }
      if (this.step === 3) {
        this.$router.push(this.localePath('shop-checkout-shipping'))
      }
    },
    goToPrevious() {
      this.$emit('previous')
    },
    goToNext() {
      if (this.next === true) {
        this.$emit('next')
      }
    },
    enableNextLoading() {
      this.nextLoading = true
    },
    disableNextLoading() {
      this.nextLoading = false
    },
    computePrices() {
      let subTotal = 0
      let totalWeight = 0
      this.$store.state.cart.forEach(item => {
        subTotal = subTotal + item.price
        totalWeight = totalWeight + item.weight
      })
      this.$store.commit('SET_CHECKOUT_ITEMS', [subTotal.toFixed(2), totalWeight.toFixed(2)])
    }
  }
};
</script>
