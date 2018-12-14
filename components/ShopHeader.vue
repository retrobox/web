<template>
  <div class="shop-header-container">
    <div class="shop-header-cart">
      <span class="shop-header-cart-amount">{{ $tc('shop.cart.items', $store.state.cart.length, { count: $store.state.cart.length }) }}</span>
      <a
        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded button"
        @click="$router.push('/shop/cart')">
        <Icon value="fas fa-shopping-cart" />
        {{ $t('shop.cart.title') }}
      </a>
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
