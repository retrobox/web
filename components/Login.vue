<template>
  <div>
    <div
      v-show="!$store.state.isAuthenticated"
      class="account account-desktop">
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
      <div
        class="bg-grey hover:bg-gray-dark text-white font-bold py-2 px-4 rounded button"
        @click="$modal.show('loginOrRegister')">
        {{ $t('account.title') }}
      </div>
    </div>
    <no-ssr>
      <modal
        name="login"
        adaptive
        class="modal login-modal">
        <div class="modal-container">
          <div class="login-loading-container">
            <div class="loading">
              <Icon
                value="fas fa-sync"
                spin />
            </div>
          </div>
        </div>
      </modal>
      <modal
        name="loginOrRegister"
        height="auto"
        adaptive
        class="modal login-or-register-modal">
        <div class="modal-container">
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
                <a @click="logout()">
                  <Icon value="fas fa-sign-out-alt" />
                  <span class="text">{{ $t('account.logout.title') }}</span>
                </a>
                <a @click="goToDashboard()">
                  <Icon value="fas fa-user-circle" />
                  <span class="text">{{ $t('account.dashboard') }}</span>
                </a>
                <a
                  v-if="$store.state.user.isAdmin"
                  @click="goToAdminDashboard()">
                  <Icon value="fas fa-tachometer-alt" />
                  <span class="text">{{ $t('account.admin') }}</span>
                </a>
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
        </div>
        <div
          class="button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 cancel-button"
          @click="$modal.hide('loginOrRegister')">
          {{ $t('close') }}
        </div>
      </modal>
    </no-ssr>
  </div>
</template>

<script>
  import Icon from "./Icon"
  export default {
    name: 'Login',
    components: {Icon},
    data() {
      return {
        is_logout: false
      }
    },
    methods: {
      login: function (type) {
        //where type is 'login' or 'register'
        this.$modal.hide('loginOrRegister');
        this.$modal.show('login');
        let url = window.location;
        if (this.$store.state.loginRedirectRoute !== '' && this.$store.state.loginRedirectRoute !== undefined) {         
          url = window.location.origin + this.$store.state.loginRedirectRoute
        }
        this.$cookie.set('login_redirection_url', url, {domain: this.$env.COOKIE_DOMAIN});
        //request the api
        this.$apitator.get('/account/' + type).then((response) => {
          window.location = response.data.data.url
        }).catch(() => {
          this.$modal.hide('login')
        })
      },
      logout: function () {
        this.$modal.hide('loginOrRegister');
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
          this.$router.push('/')
        }
      },
      goToDashboard: function () {
        this.$modal.hide('loginOrRegister');
        //this.$modal.show('login');
        this.$router.push('/dashboard')
        // window.location = this.$env.USER_DASHBOARD_ENDPOINT
      },
      goToAdminDashboard: function () {
        this.$modal.hide('loginOrRegister');
        this.$modal.show('login');
        window.location = this.$env.ADMIN_DASHBOARD_ENDPOINT
      }
    }
  }
</script>
