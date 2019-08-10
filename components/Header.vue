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
                  <a @click="mobileNavigate('index')">
                    {{ $t('home') }}
                  </a>
                </li>
                <li>
                  <a @click="mobileNavigate('docs-slug')">
                    {{ $t('docs') }}
                  </a>
                </li>
                <li>
                  <a @click="mobileNavigate('downloads')">
                    {{ $t('downloads.title') }}
                  </a>
                </li>
                <li>
                  <a @click="mobileNavigate('shop')">
                    {{ $t('shop.title') }}
                  </a>
                </li>
                <li>
                  <a @click="mobileNavigate('shop-slug', {slug: 'retrobox-kit'})">
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
            <nuxt-link
              :to="switchLocalePath('fr')"
              class="w-1/2 h-12 locale"
              @click="$modal.hide('localeSelection')">
              <div class="locale-image">
                <img
                  :alt="$t('french_flag')"
                  src="../assets/images/fr.png">
              </div>
              <div class="locale-title">
                {{ $t('french') }}
              </div>
            </nuxt-link>
            <nuxt-link
              :to="switchLocalePath('en')"
              class="w-1/2 h-12 locale"
              @click="$modal.hide('localeSelection')">
              <div class="locale-image">
                <img
                  :alt="$t('english_flag')"
                  src="../assets/images/en.png">
              </div>
              <div class="locale-title">
                {{ $t('english') }}
              </div>
            </nuxt-link>
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
        <nuxt-link
          v-if="$i18n.locale === 'en'"
          :to="switchLocalePath('fr')"
          class="locale_selection font-bold py-2 px-4 button flex">
          <Icon
            style="margin-right: 8px"
            value="fas fa-flag" />
          <span>{{ $t('french') }}</span>
        </nuxt-link>
        <nuxt-link
          v-if="$i18n.locale === 'fr'"
          :to="switchLocalePath('en')"
          class="locale_selection font-bold py-2 px-4 button flex">
          <Icon
            style="margin-right: 8px"
            value="fas fa-flag" />
          <span>{{ $t('english') }}</span>
        </nuxt-link>
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
          <nuxt-link :to="localePath('index')">
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
            <nuxt-link :to="localePath('index')">
              {{ $t('home') }}
            </nuxt-link>
          </div>
          <div class="nav-item with-link">
            <nuxt-link :to="localePath('docs-slug')">
              {{ $t('docs') }}
            </nuxt-link>
          </div>
          <div class="nav-item with-link downloads-link">
            <nuxt-link :to="localePath('downloads')">
              {{ $t('downloads.title') }}
            </nuxt-link>
          </div>
          <div class="nav-item with-link">
            <nuxt-link :to="localePath('shop')">
              {{ $t('shop.title') }}
            </nuxt-link>
          </div>
          <div class="nav-item with-button">
            <nuxt-link
              :to="localePath({name: 'shop-slug', params: {slug: 'retrobox-kit'}})"
              class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded button">
              <Icon value="fas fa-shopping-cart" />
              {{ $t('buy') }}
            </nuxt-link>
          </div>
        </nav>
      </div>
    </div>
    <!--<div class="header-breadcrumb">
      <div class="container mx-auto header-breadcrumb-flex">
        <div class="breadcrumb-location desktop">
          &lt;!&ndash;{{ $t('breadcrumb.title') }}
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
          </ul>&ndash;&gt;
        </div>
        <div class="breadcrumb-socials">
          <Socials />
        </div>
      </div>
    </div>-->
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
    mobileNavigate: function (name, params = {}) {
      let path = this.localePath({name, params})
      this.$router.push(path)
      this.$store.commit('TOGGLE_NAV')
    }
  }
}
</script>
