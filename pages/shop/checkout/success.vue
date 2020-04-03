<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{ $t('shop.checkout.success.thanks') }}</h1>
      </div>
    </div>
    <div class="shop-checkout-container container mx-auto">
      <div class="shop-checkout-thanks">
        <button
          ref="homeButton"
          class="button button-primary button-big"
          @click="$router.push(localePath('index'))">
          <Icon value="fas fa-home" />
          {{ $t('home') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from "~/components/Icon"
  export default {
    components: {Icon},
    head () {
      return {
        title: this.$t('shop.checkout.success.thanks')
      }
    },
    mounted () {
      this.$refs.homeButton.focus()
      setTimeout(() => {
        // TODO: fix: alert doesn't launch when navigating directly via history mode
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
