<template>
  <div class="header-container">
    <no-ssr>
      <!-- NAV MOBILE -->
      <scale-transition>
        <div
          v-if="$store.state.displayMobileNav"
          class="mobile-nav-container">
          <div class="mobile-nav-content">
            <div class="mobile-nav-close">
              <div
                class="button hover:bg-grey-darker font-bold py-3 px-5 cancel-button"
                @click="$store.commit('TOGGLE_NAV')">
                <Icon value="fas fa-times" />
                <span>{{ $t('close') }}</span>
              </div>
            </div>
            <div class="mobile-nav-nav">
              <ul>
                <li>
                  <a @click="mobileNavigate('/')">
                    {{ $t('home') }}
                  </a>
                </li>
                <li>
                  <a @click="mobileNavigate('/docs')">{{ $t('docs') }}</a>
                </li>
                <li>
                  <a @click="mobileNavigate('/community')">
                    {{ $t('community.title') }}
                  </a>
                </li>
                <li>
                  <a @click="mobileNavigate('/shop')">
                    {{ $t('shop.title') }}
                  </a>
                </li>
                <li>
                  <a @click="mobileNavigate('/shop/retrobox-kit')">
                    {{ $t('buy') }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </scale-transition>
      <!--MODAL FOR LOCALE SELECTION -->
      <modal
        name="localeSelection"
        class="locales-modal">
        <div class="locales-container">
          <div
            v-show="!localeLoading"
            class="flex locales">
            <div
              class="w-1/2 h-12 locale"
              @click="setLocale('fr')">
              <div class="locale-image">
                <img
                  :alt="$t('french_flag')"
                  src="../assets/images/fr.png">
              </div>
              <div class="locale-title">
                {{ $t('french') }}
              </div>
            </div>
            <div
              class="w-1/2 h-12 locale"
              @click="setLocale('en')">
              <div class="locale-image">
                <img
                  :alt="$t('english_flag')"
                  src="../assets/images/en.png">
              </div>
              <div class="locale-title">
                {{ $t('english') }}
              </div>
            </div>
          </div>
          <div v-show="localeLoading">
            <div class="loading">
              <Icon
                value="fas fa-sync"
                spin />
            </div>
          </div>
        </div>
        <div
          class="button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 cancel-button"
          @click="$modal.hide('localeSelection')">
          {{ $t('close') }}
        </div>
      </modal>
    </no-ssr>
    <!--HEADER CONTENT -->
    <div class="header-top">
      <div class="container mx-auto header-top-content">
        <div
          class="locale_selection font-bold py-2 px-4 button flex"
          @click="localeSelection()">
          <Icon
            style="margin-right: 8px"
            value="fas fa-flag" />
          <span>{{ $t('actual_lang') }}</span>
        </div>
        <div class="account">
          <Login />
        </div>
      </div>
    </div>
    <div class="colored-divider-container">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="header-background-back"></div>
    <div class="header-background">
      <div class="container mx-auto header-content">
        <div class="header-title-container">
          <nuxt-link to="/">
            <img
              src="../assets/images/nav.png"
              class="header-title-logo">
          </nuxt-link>
        </div>
        <div class="header-nav-container mobile">
          <button
            class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded button nav-toggle"
            @click="$store.commit('TOGGLE_NAV')">
            <Icon value="fas fa-bars" />
          </button>
        </div>
        <nav class="header-nav-container desktop">
          <div class="nav-item with-link">
            <nuxt-link to="/">{{ $t('home') }}</nuxt-link>
          </div>
          <div class="nav-item with-link">
            <nuxt-link to="/docs">{{ $t('docs') }}</nuxt-link>
          </div>
          <div class="nav-item with-link">
            <nuxt-link to="/community">{{ $t('community.title') }}</nuxt-link>
          </div>
          <div class="nav-item with-link">
            <nuxt-link to="/shop">{{ $t('shop.title') }}</nuxt-link>
          </div>
          <div class="nav-item with-button">
            <nuxt-link
              to="/shop/retrobox-kit"
              class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded button">
              <Icon value="fas fa-shopping-cart" />
              {{ $t('buy') }}
            </nuxt-link>
          </div>
        </nav>
      </div>
    </div>
    <div class="header-breadcrumb">
      <div class="container mx-auto header-breadcrumb-flex">
        <div class="breadcrumb-location desktop">
          <!--{{ $t('breadcrumb.title') }}
          <ul>
            <li class="item">{{ $store.state.location.root }}</li>
            <li
              v-if="$store.state.location.sub !== undefined && $store.state.location.sub !== ''"
              class="divider">></li>
            <li
              v-if="$store.state.location.sub !== undefined && $store.state.location.sub !== ''"
              class="item">
              {{ $store.state.location.sub }}
            </li>
          </ul>-->
        </div>
        <div class="breadcrumb-socials">
          <Socials />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon"
import Socials from "./Socials"
import Login from "./Login"
export default {
  name: 'Header',
  components: {Login, Socials, Icon},
  data: () => ({
    localeLoading: false
  }),
  methods: {
    localeSelection: function () {
      this.$modal.show('localeSelection')
    },
    setLocale: function (locale) {
      this.$cookie.set('locale', locale, { expires: '365D' })
      this.localeLoading = true
      window.location.reload()
    },
    mobileNavigate: function (target) {
      this.$store.commit('TOGGLE_NAV')
      this.$router.push(target)
    }
  }
}
</script>
