<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{ $t('shop.shipping_details.title') }}</h1>
      </div>
    </div>
    <div class="shop-checkout-container container mx-auto">
      <ShopHeader/>
      <div class="mt-4">
        <ShippingDetailsForm
          ref="shippingDetailsForm"
          @saved="formSaved" />
        <div class="flex items-center justify-between">
          <button
            class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            type="button"
            @click="$router.push('/shop/cart')">
            {{ $t('shop.shipping_details.previous') }}
          </button>
          <button
            class="button bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="saveDetails"
          >
            <Icon
              v-if="saving"
              value="fas fa-sync"
              spin />
            {{ $t('shop.shipping_details.next') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ShopHeader from "../../components/ShopHeader"
  import ShippingDetailsForm from "../../components/ShippingDetailsForm"
  import Icon from "../../components/Icon"

  export default {
    name: 'ShippingDetails',
    components: {
      ShopHeader,
      ShippingDetailsForm,
      Icon
    },
    head () {
      return {
        title: this.$t('shop.shipping_details.title')
      }
    },
    data: () => ({
      saving: false
    }),
    methods: {
      saveDetails() {
        this.saving = true
        this.$refs.shippingDetailsForm.save()
      },
      formSaved() {
        this.saving = false
        this.$router.push('/shop/checkout')
      }
    }
  }
</script>
