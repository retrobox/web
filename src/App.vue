<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
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
        created() {
            if (navigator.languages != undefined)
               var brower_locale = navigator.languages[0]
            else
               var brower_locale = navigator.language
            Vue.config.lang = this.$cookie.get('locale') || brower_locale
            this.$i18n.locale = Vue.config.lang
            setTimeout(() => {
                this.show = true
            }, 400)
        }
    }
</script>

<style lang="scss" src="./assets/styles/app.scss"></style>
