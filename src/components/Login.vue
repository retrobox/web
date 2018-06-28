<template>
    <div>
      <div class="account">
        <a @click="login('login')">
            <icon name="sign-in-alt" class="icon"></icon>
            <span class="text">{{$t('login')}}</span>
        </a>
        <a @click="login('register')">
            <icon name="pencil-alt" class="icon"></icon>
            <span class="text">{{$t('register')}}</span>
        </a>
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
            <h3 class="login-or-register-title">{{$t('login-or-register')}}</h3>
            <div class="login-or-register-container">
              <div class="login-or-register">
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
            }
        },
        methods: {
        login: function (type) {
          //where type is 'login' or 'register'
           this.$modal.hide('login_or_register')
           this.$modal.show('login')
           this.$cookie.set('login_redirection_url', window.location)
           //request the api
           axios.get(process.env.API_ENDPOINT + "/account/" + type).then((response) => {
             window.location = response.data.data.url
           })
        }
      }
    }
</script>
