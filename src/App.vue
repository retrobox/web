<template>
    <div id="app">

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
    //import Socials from "./components/Socials.vue"
    import Footer from "./components/Footer-container.vue"
    import Header from "./components/Header-container.vue"
    export default {
        name: 'App',
        components: {
            "footer-container": Footer,
            "header-container": Header,
        },
        data() {
            return {
                show: false
            }
        },
        created() {
            setTimeout(() => {
                this.show = true
            }, 400)
        }
    }
</script>

<style lang="scss" src="./assets/styles/app.scss"></style>
