<template>
    <div id="app" v-bind:class="{'no-scroll': $store.state.nav_toggled}">
        <fade-transition v-show="show">
            <div>
                <header-container/>
                <div class="main-content">
                    <scale-transition>
                        <router-view/>
                    </scale-transition>
                    <section class="landing-section landing-bottom"></section>
                </div>
                <footer-container/>
            </div>
        </fade-transition>

        <modal name="modal_alert" class="alert-modal">
            <div class="alert-container">
                <div class="alert-content">
                    <i class="fas fa-exclamation-circle icon text-red" v-if="$store.state.alert.type == 'error'"></i>
                    <i class="fas fa-check-circle icon text-green" v-if="$store.state.alert.type == 'success'"></i>
                    <h3 class="alert-title">{{$store.state.alert.title}}</h3>
                    <p>{{$store.state.alert.description}}</p>
                </div>
            </div>

            <div class="button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 cancel-button"
                 @click="$store.commit('REMOVE_ALERT')">
                {{$t('close')}}
            </div>
        </modal>
    </div>
</template>

<script>
    import Footer from "./components/Footer-container.vue"
    import Header from "./components/Header-container.vue"
    import Vue from 'vue'
    export default {
        name: 'App',
        components: {
            "footer-container": Footer,
            "header-container": Header
        },
        data() {
            return {
                show: false
            }
        },
        watch: {
          "$store.state.alert.enabled": function (status) {
              if(status){
                this.$modal.show('modal_alert')
              }else{
                this.$modal.hide('modal_alert')
              }
          }
        },
        created() {
            if (this.$cookie.get('locale') == null) {
              if (navigator.languages != undefined){
                 var brower_locale = navigator.languages[0]
              }
              else{
                 var brower_locale = navigator.language
              }
              Vue.config.lang = brower_locale.substring(0, 2)
              if (brower_locale == undefined) {
                brower_locale = 'en'
              }
            }else {
              Vue.config.lang = this.$cookie.get('locale')
            }

            this.$i18n.locale = Vue.config.lang
            setTimeout(() => {
                this.show = true
            }, 400)
        }
    }
</script>

<style lang="scss" src="./assets/styles/app.scss"></style>
