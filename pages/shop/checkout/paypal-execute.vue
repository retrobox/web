<template>
  <div>
    <div v-if="hasError">
      <Error
        :title="$t('error')"
        :description="errorDescription"
      />
    </div>
    <div
      v-if="!hasError"
      class="error-placeholder">
      <div></div>
    </div>
  </div>
</template>

<script>
import Error from "~/components/Error"
export default {
  components: {Error},
  head () {
    return {
      title: this.$t('shop.paypal-execute.title')
    }
  },
  data: () => ({
    hasError: false,
    errorDescription: ''
  }),
  created () {
    this.$store.commit('SET_IS_LOADING', true)
    if (!this.$isServer) {
      this.execute()
    }
  },
  methods: {
    execute: function() {
      if (
        this.$route.query.paymentId === undefined ||
        this.$route.query.paymentId === '' ||
        this.$route.query.PayerID === undefined ||
        this.$route.query.PayerID === '' ||
        this.$route.query.token === undefined ||
        this.$route.query.token === ''
      ) {
        this.$store.commit('SET_IS_LOADING', false)
        this.hasError = true
        this.errorDescription = this.$t('invalid-url')
      } else {
        this.$apitator.post('/paypal/execute', { 
          token: this.$route.query.token,
          payment_id: this.$route.query.paymentId,
          payer_id: this.$route.query.PayerID
        }).then(res => {
          this.$store.commit('SET_IS_LOADING', false)
          this.$router.push(this.localePath('shop-checkout-success'))
        }).catch(err => {
          this.$store.commit('SET_IS_LOADING', false)
          this.hasError = true
          this.errorDescription = this.$t('shop.paypal-execute.error.description-api')
          console.log(err)
          console.error("Can't execute the paypal payment")
        })
      }
    }
  }
}
</script>
