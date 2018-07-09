<template>
    <div>
      <div class="account account-desktop" v-if="$cookie.get('user_token') == undefined">
        <a @click="login('login')">
            <icon name="sign-in-alt" class="icon"></icon>
            <span class="text">{{$t('login')}}</span>
        </a>
        <a @click="login('register')">
            <icon name="pencil-alt" class="icon"></icon>
            <span class="text">{{$t('register')}}</span>
        </a>
      </div>
      <div class="account-mobile" v-bind:class="{'account-button': $cookie.get('user_token') != undefined && !this.is_logout}">
        <div @click="$modal.show('login_or_register')"
           class="bg-grey hover:bg-gray-dark text-white font-bold py-2 px-4 rounded button">
            {{$t('account.title')}}
        </div>
      </div>
      <modal name="login" class="modal login-modal">
          <div class="modal-container">
              <div class="login-loading-container">
                <div class="loading">
                    <icon name="sync" spin scale="3"></icon>
                </div>
              </div>
          </div>
      </modal>
      <modal name="login_or_register" class="modal login-or-register-modal">
          <div class="modal-container">
            <h3 class="login-or-register-title" v-if="!this.is_logout && $cookie.get('user_token') != undefined">{{$t('account.title')}}</h3>
            <h3 class="login-or-register-title" v-else>{{$t('login-or-register')}}</h3>
            <div class="login-or-register-container">
              <div class="login-or-register">
                  <div v-if="$cookie.get('user_token') != undefined">
                    <a @click="logout()">
                        <icon name="sign-out-alt" class="icon"></icon>
                        <span class="text">{{$t('account.logout.title')}}</span>
                    </a>
                    <a @click="goToDashboard()">
                        <icon name="tachometer-alt" class="icon"></icon>
                        <span class="text">{{$t('account.dashboard')}}</span>
                    </a>
                  </div>
                  <div v-else>
                    <a @click="login('login')">
                        <icon name="sign-in-alt" class="icon"></icon>
                        <span class="text">{{$t('login')}}</span>
                    </a>
                    <a @click="login('register')">
                        <icon name="pencil-alt" class="icon"></icon>
                        <span class="text">{{$t('register')}}</span>
                    </a>
                </div>
              </div>
            </div>
          </div>
          <div class="button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 cancel-button"
               @click="$modal.hide('login_or_register')">
              {{$t('close')}}
          </div>
      </modal>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Login',
        data() {
            return {
                is_logout: false
            }
        },
        methods: {
        login: function (type) {
          //where type is 'login' or 'register'
           this.$modal.hide('login_or_register')
           this.$modal.show('login')
           var url = window.location
           if (this.$store.state.login_redirect_route !== "" && this.$store.state.login_redirect_route !== undefined) {
              url = this.$store.state.login_redirect_route
           }
           this.$cookie.set('login_redirection_url', url)
           //request the api
           this.$apitator.get(this, "/account/" + type).then((response) => {
             window.location = response.data.data.url
           }).catch(() => {
             this.$modal.hide('login')
           })
        },
        logout: function () {
            this.$modal.hide('login_or_register')
            this.$cookie.delete('user_token')
            this.is_logout = true
            //close and refresh the state
            //add a alert
            this.$store.commit('ADD_ALERT', {
                type: "success",
                title: this.$i18n.t('account.logout.success.title'),
                description: this.$i18n.t('account.logout.success.description')
            })
        }
      }
    }
</script>
