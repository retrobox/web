<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{ $t('shop.checkout.success.thanks') }}</h1>
      </div>
    </div>
    <div class="shop-checkout-container container mx-auto">
      <div class="shop-checkout-thanks">
        <a
          class="shop-checkout-thanks-button bg-blue hover:bg-blue-light text-white font-bold py-4 px-8 rounded inline-flex items-center button"
          @click="$router.push('/')">
          <Icon value="fas fa-home" />
          {{ $t('home') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from "../../components/Icon"
  export default {
    components: {Icon},
    head () {
      return {
        title: this.$t('shop.checkout.success.thanks')
      }
    },
    mounted () {
      setTimeout(() => {
        this.$store.commit('ADD_ALERT', {
          type: 'success',
          title: this.$t('shop.checkout.success.title'),
          description: this.$t('shop.checkout.success.description')
        });
        this.$store.commit('EMPTY_CART');
      }, 100)
    }
  }
</script>
