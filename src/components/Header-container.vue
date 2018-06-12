<template>
    <div class="header-container">
        <!-- NAV MOBILE -->
        <scale-transition>
            <div class="mobile-nav-container" v-if="$store.state.nav_toggled">
                <div class="mobile-nav-content">
                    <div class="mobile-nav-close">
                        <div @click="$store.commit('TOGGLE_NAV')"
                             class="button hover:bg-grey-darker font-bold py-3 px-5 cancel-button">
                            <icon name="times" class="icon"/>
                            <span>{{$t('close')}}</span>
                        </div>
                    </div>
                    <div class="mobile-nav-nav">
                        <ul>
                            <li>
                                <a @click="$router.push({name: 'Home'}); $store.commit('TOGGLE_NAV')">{{$t('home')}}</a>
                            </li>
                            <li>
                                <a @click="$router.push({name: 'DocumentationHome'}); $store.commit('TOGGLE_NAV')">{{$t('docs')}}</a>
                            </li>
                            <li>
                                <a @click="$router.push({name: 'Community'}); $store.commit('TOGGLE_NAV')">{{$t('community.title')}}</a>
                            </li>
                            <li>
                                <a href="#">
                                    {{$t('buy')}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </scale-transition>
        <!-- MODAL FOR LOCALE SELECTION -->
        <modal name="locale_selection" class="locales-modal">
            <div class="locales-container">
                <div class="flex locales">
                    <div class="w-1/2 h-12 locale" @click="set_locale('fr')">
                        <div class="locale-image">
                            <img src="../assets/img/fr.png" :alt="$t('french_flag')">
                        </div>
                        <div class="locale-title">
                            {{$t('french')}}
                        </div>
                    </div>
                    <div class="w-1/2 h-12 locale" @click="set_locale('en')">
                        <div class="locale-image">
                            <img src="../assets/img/en.png" :alt="$t('english_flag')">
                        </div>
                        <div class="locale-title">
                            {{$t('english')}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 cancel-button"
                 @click="$modal.hide('locale_selection')">
                Fermer
            </div>
        </modal>
        <!-- HEADER CONTENT -->
        <div class="header-top">
            <div class="container mx-auto header-top-content">
                <div class="locale_selection font-bold py-2 px-4 button" @click="locale_selection()">
                    <icon name="flag" class="icon"></icon>
                    <span>{{$t('actual_lang')}}</span>
                </div>
                <div class="account">
                    <a href="#">
                        <icon name="sign-in-alt" class="icon"></icon>
                        <span class="text">{{$t('login')}}</span>
                    </a>
                    <a href="#">
                        <icon name="pencil-alt" class="icon"></icon>
                        <span class="text">{{$t('register')}}</span>
                    </a>
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
        <div class="header-background">
            <div class="container mx-auto header-content">
                <div class="header-title-container">
                    <a @click="$router.push({name: 'Home'})">
                        <img src="../assets/img/nav.png" class="header-title-logo">
                    </a>
                </div>
                <div class="header-nav-container mobile">
                    <button href="#"
                            class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded button nav-toggle"
                            @click="$store.commit('TOGGLE_NAV')">
                        <icon name="bars" class="icon"></icon>
                    </button>
                </div>
                <nav class="header-nav-container desktop">
                    <div class="nav-item with-link">
                        <a @click="$router.push({name: 'Home'})">{{$t('home')}}</a>
                    </div>
                    <div class="nav-item with-link">
                        <a @click="$router.push({name: 'DocumentationHome'})">{{$t('docs')}}</a>
                    </div>
                    <div class="nav-item with-link">
                        <a @click="$router.push({name: 'Community'})">{{$t('community.title')}}</a>
                    </div>
                    <div class="nav-item with-button">
                        <a href="#"
                           class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded button">
                            <icon name="shopping-cart" class="icon"></icon>
                            {{$t('buy')}}
                        </a>
                    </div>
                </nav>
            </div>
        </div>
        <div class="header-breadcrumb">
            <div class="container mx-auto header-breadcrumb-flex">
                <div class="breadcrumb-location desktop">
                    {{$t('breadcrumb.title')}}
                    <ul>
                        <li class="item">{{$store.state.location.root}}</li>
                        <li class="divider" v-if="$store.state.location.sub_root != undefined">></li>
                        <li class="item" v-if="$store.state.location.sub_root != undefined">
                            {{$store.state.location.sub_root}}
                        </li>
                    </ul>
                </div>
                <div class="breadcrumb-socials">
                    <socials/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Socials from "./Socials.vue"

    export default {
        name: 'Header-container',
        components: {
            "socials": Socials
        },
        methods: {
            locale_selection: function () {
                this.$modal.show('locale_selection')
            },
            set_locale: function (locale) {
                Vue.config.lang = locale
                this.activeLocale = locale
                this.$cookie.set('locale', locale)
                this.$i18n.locale = Vue.config.lang
                this.$modal.hide('locale_selection')
                this.$store.commit('SET_TITLE', this.$store.state.title_context)
            }
        },
        data() {
            return {
                activeLocale: Vue.config.lang
            }
        }
    }
</script>
