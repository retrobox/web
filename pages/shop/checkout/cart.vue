<template>
  <div>
    <ShopCoverTitle :title="$t('shop.cart.title')" />
    <div class="container mx-auto">
      <CheckoutPage
        :step="1"
        @next="next()">
        <div class="shop-card-mosaic justify-center">
          <ShopCard 
            v-for="item in $store.state.cart"
            :key="item.id"
            :item="item"
            remove-mode
            @removed="toggleCart(item)" />
        </div>
        <div class="checkout-sub-total">
          <div class="checkout-sub-total-text">
            {{ $t('shop.cart.sub_total') }}
          </div>
          <div class="checkout-sub-total-price">
            <span class="currency">€</span> {{ $store.state.checkout.subTotal }}
          </div>
        </div>
      </CheckoutPage>
    </div>
  </div>
</template>

<script>
import Icon from "~/components/Icon"
import ShopHeader from "~/components/ShopHeader"
import ShopCard from "~/components/ShopCard"
import CheckoutPage from "~/components/CheckoutPage"
import ShopCoverTitle from "~/components/ShopCoverTitle"

export default {
  components: { ShopCoverTitle, ShopHeader, ShopCard, Icon, CheckoutPage },
  head() {
    return {
      title: this.$t("shop.cart.title")
    };
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('next') === 'yes' && this.$cookie.get('user_token') !== null) {
      this.next()
    }
  },
  methods: {
    removeItem(item) {
      this.$store.dispatch('toggleShopItem', this, item.id)
    },
    next() {
      if (this.$cookie.get('user_token') == null) {
        // register a checkout flag for redirection after login
        this.$router.push({ query: { next: 'yes' }})
        this.$store.commit('SET_LOGIN_MODAL', true)
      } else {
        this.$router.push(this.localePath('shop-checkout-shipping'))
      }
    },
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
    }
  }
};
</script>
