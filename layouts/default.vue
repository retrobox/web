<template>
  <div>
    <transition name="main-transition">
      <div>
        <Header />
        <div class="content-container">
          <div
            v-show="$store.state.isLoading"
            class="loading-container">
            <div class="loading">
              <Icon
                value="fas fa-sync"
                spin />
            </div>
          </div>
          <div v-show="!$store.state.isLoading">
            <nuxt/>
          </div>
        </div>
        <div
          v-if="$route.name !== 'index' || $store.state.hasNuxtError === true"
          class="content-container-bottom"></div>
        <Footer />
        <no-ssr>
          <modal
            name="modalAlert"
            adaptive
            class="modal alert-modal">
            <div class="alert-container modal-container">
              <div class="alert-content">
                <Icon
                  v-if="$store.state.alert.type === 'error'"
                  class="text-red"
                  value="fas fa-exclamation-circle" />
                <Icon
                  v-if="$store.state.alert.type === 'success'"
                  class="text-green"
                  value="fas fa-check-circle" />
                <h3 class="alert-title">{{ $store.state.alert.title }}</h3>
                <p>{{ $store.state.alert.description }}</p>
              </div>
            </div>

            <div
              class="button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 cancel-button"
              @click="$store.commit('REMOVE_ALERT')">
              {{ $t('close') }}
            </div>
          </modal>
          <GoToTop />
        </no-ssr>
      </div>
    </transition>
  </div>
</template>
<script>
  import Header from "../components/Header"
  import Footer from "../components/Footer"
  import Icon from "../components/Icon"
  import GoToTop from "../components/GoToTop"
  import Aos from 'aos'
  import 'aos/dist/aos.css'
  export default {
    components: {GoToTop, Icon, Footer, Header},
    head () {
      return {
        titleTemplate: '%s - Retrobox',
        meta: [
          {name: 'description', content: this.$t('description')},
          {property: 'og:description', content: this.$t('description')},
          {property: 'og:locale', content: this.$i18n.locale},
          {property: 'og:locale:alternate', content: 'fr'},
          {property: 'og:locale:alternate', content: 'en'}
        ],
        htmlAttrs: {
          lang: this.$i18n.locale
        }
      }
    },
    data () {
      return {
        windowWidth: 0
      }
    },
    watch: {
      '$store.state.alert.enabled': function (status) {
        if (status) {
          this.$modal.show('modalAlert')
        } else {
          this.$modal.hide('modalAlert')
        }
      },
      'windowWidth': function (windowWidth) {
        this.computeIsMobile(windowWidth)
      }
    },
    created () {
      this.$apitator.setAuthorizationToken(this.$store.state.userToken)
    },
    mounted () {
      // load user
      // if (!this.$isServer) {
      //   if (this.$cookie.get('user_token') !== null) {
      //     this.$store.commit('LOAD_USER', this.$cookie.get('user_token'))
      //     this.$apitator.setAuthorizationToken(this.$cookie.get('user_token'))
      //   }
      // }

      // let locale = navigator.language.substring(0, 2);
      // if (this.$cookie.get('locale') === undefined || this.$cookie.get('locale') === null) {
      //   this.$cookie.set('locale', locale);
      //   this.$i18n.locale = locale
      // } else {
      //   this.$i18n.locale = this.$cookie.get('locale')
      // }

      if (!this.$isServer) {
        Aos.init()
        setTimeout(() => {
          Aos.refresh()
        }, 300)

        this.windowWidth = window.innerWidth
        window.addEventListener('resize', () => {
          this.windowWidth = window.innerWidth
        })
      }

    },
    methods: {
      computeIsMobile: function (windowWidth) {
        let isMobile = (windowWidth <= 700)
        if (this.$store.state.isMobile !== isMobile) {
          this.$store.commit('SET_IS_MOBILE', isMobile)
        }
      }
    }
  }
</script>
