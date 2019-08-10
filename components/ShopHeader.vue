<template>
  <div class="shop-header-container">
    <div class="shop-header-cart">
      <span class="shop-header-cart-amount">
        {{ $tc('shop.cart.items', $store.state.cart.length, { count: $store.state.cart.length }) }}
      </span>
      <nuxt-link
        :to="localePath('shop-checkout-cart')"
        class="button button-primary">
        <Icon value="fas fa-shopping-cart" />
        {{ $t('shop.cart.title') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import Icon from "./Icon"
  export default {
    name: 'ShopHeader',
    components: {Icon}
  }
</script>
