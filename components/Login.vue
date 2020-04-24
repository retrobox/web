<template>
  <div class="flex">
    <div class="account">
      <div
        v-show="!$store.state.isAuthenticated"
        class="account-desktop">
        <a @click="login('login')">
          <Icon value="fas fa-sign-in-alt" />
          <span class="text">{{ $t('login') }}</span>
        </a>
        <a @click="login('register')">
          <Icon value="fas fa-pencil-alt" />
          <span class="text">{{ $t('register') }}</span>
        </a>
      </div>
      <div
        :class="{'account-button': $store.state.isAuthenticated && !is_logout}"
        class="account-mobile">
        <button
          class="button header-top-button"
          @click="$refs.loginOrRegisterModal.show()">
          {{ $t('account.title') }}
        </button>
      </div>
    </div>
    <Modal
      ref="loginOrRegisterModal"
      class="login-or-register-modal"
      closing="primary"
      @close="$store.commit('SET_LOGIN_MODAL', false)">
      <h3
        v-if="!is_logout && $store.state.isAuthenticated"
        class="login-or-register-title">
        {{ $t('account.title') }}
      </h3>
      <h3
        v-else
        class="login-or-register-title">
        {{ $t('login-or-register') }}
      </h3>
      <div class="login-or-register-container">
        <div class="login-or-register">
          <div v-if="$store.state.isAuthenticated">
            <button @click="logout()">
              <Icon value="fas fa-sign-out-alt" />
              <span class="text">{{ $t('account.logout.title') }}</span>
            </button>
            <button @click="goToDashboard()">
              <Icon value="fas fa-user-circle" />
              <span class="text">{{ $t('account.dashboard') }}</span>
            </button>
            <button
              v-if="$store.state.user.isAdmin"
              @click="goToAdminDashboard()">
              <Icon value="fas fa-tachometer-alt" />
              <span class="text">{{ $t('account.admin') }}</span>
            </button>
          </div>
          <div v-else>
            <a @click="login('login')">
              <Icon value="fas fa-sign-in-alt" />
              <span class="text">{{ $t('login') }}</span>
            </a>
            <a @click="login('register')">
              <Icon value="fas fa-pencil-alt" />
              <span class="text">{{ $t('register') }}</span>
            </a>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
  import Icon from "./Icon"
  import Modal from "~/components/Modal"
  export default {
    name: 'Login',
    components: {Icon, Modal},
    data() {
      return {
        is_logout: false
      }
    },
    watch: {
      '$store.state.loginModal': function (value) {
        if (value === true) {
          this.$refs.loginOrRegisterModal.show()
        } else if (value === false) {
          this.$refs.loginOrRegisterModal.hide()
        }
      }
    },
    methods: {
      login: function (type) {
        //where type is 'login' or 'register'
        this.$refs.loginOrRegisterModal.hide()
        this.$store.commit('SET_IS_LOADING', true)
        let url = window.location;
        if (this.$store.state.loginRedirectRoute !== '' && this.$store.state.loginRedirectRoute !== undefined) {
          url = window.location.origin + this.$store.state.loginRedirectRoute
        }
        this.$cookie.set('login_redirection_url', url, {domain: this.$env.COOKIE_DOMAIN});
        //request the api
        this.$apitator.get('/account/' + type).then((response) => {
          window.location = response.data.data.url
        }).catch(() => {
          this.$store.commit('SET_IS_LOADING', false)
        })
      },
      logout: function () {
        this.$refs.loginOrRegisterModal.hide()
        this.$cookie.delete('user_token', {domain: this.$env.COOKIE_DOMAIN});
        this.is_logout = true;
        this.$store.commit('SET_AUTH', false)
        //close and refresh the state
        //add a alert
        this.$store.commit('ADD_ALERT', {
          type: 'success',
          title: this.$i18n.t('account.logout.success.title'),
          description: this.$i18n.t('account.logout.success.description')
        })
        if (this.$store.state.mustBeAuthenticated) {
          this.$router.push(this.localePath('index'))
        }
      },
      goToDashboard: function () {
        this.$refs.loginOrRegisterModal.hide()
        this.$store.commit('SET_IS_LOADING', false)
        this.$router.push(this.localePath('dashboard'))
      },
      goToAdminDashboard: function () {
        this.$refs.loginOrRegisterModal.hide()
        this.$store.commit('SET_IS_LOADING', true)
        window.location = this.$env.ADMIN_DASHBOARD_ENDPOINT
      }
    }
  }
</script>
