<template>
  <div>
    <div v-if="hasError">
      <Error
        :title="$t('login-execute.error.title')"
        :description="errorDescription"
      />
    </div>
    <div
      v-if="!hasError"
      style="height: 45vh; display: flex">
      <div></div>
    </div>
  </div>
</template>

<script>
import Icon from "~/components/Icon"
import Error from "~/components/Error"
export default {
  components: {Icon, Error},
  head () {
    return {
      title: this.$t('login-execute.title')
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
  mounted () {
    console.log("STAIL.EU code: " + this.$route.query.code)
    console.log("Will redirect to: " + window.localStorage.getItem('login_redirection'))
  },
  methods: {
    execute: function() {
      if (this.$route.query.code === undefined) {
        this.$store.commit('SET_IS_LOADING', false)
        this.hasError = true
        this.errorDescription = this.$t('login-execute.error.description-input')
        
      } else {
        this.$apitator.post('/account/execute', { code: this.$route.query.code }).then(res => {
          let token = res.data.data.token
          this.$cookie.set('user_token', token, {domain: this.$env.COOKIE_DOMAIN});
          this.$store.commit('LOAD_USER', token)
          this.$apitator.setAuthorizationToken(token)

          this.$store.commit('SET_IS_LOADING', false)
          this.$router.push(window.localStorage.getItem('login_redirection'))
        }).catch(err => {
          this.$store.commit('SET_IS_LOADING', false)
          this.hasError = true
          this.errorDescription = this.$t('login-execute.error.description-api')
          console.log(err)
          console.error("Can't execute the login intent")
        })
      }
    }
  }
}
</script>
