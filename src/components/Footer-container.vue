<template>
  <div>
    <div class="partnership-container">
        <div class="partnership-content container mx-auto">
            <a class="partnership-lyceealain partnership-item" href="https://lyceealainalencon.fr/" v-tooltip.top="$t('partnership.lyceealain.title')">
                <div class="partnership-lyceealain-image partnership-image">
                  <img src="../assets/img/lyceealain.png" alt="Logo Lycée Alain">
                </div>
            </a>
            <a class="partnership-cci partnership-item" href="https://www.portesdenormandie.cci.fr/" v-tooltip.top="$t('partnership.cci.title')">
                <div class="partnership-cci-image partnership-image">
                  <img src="../assets/img/ccinormandie.png" alt="Logo CCI Normandie">
                </div>
            </a>
            <a class="partnership-creative-commons partnership-item" href="http://creativecommons.org/licenses/by-nc-sa/3.0/" v-tooltip.top="$t('partnership.creative-commons.title')">
                <div class="partnership-creative-commons-image partnership-image">
                    <img src="../assets/img/creative-commons.png" alt="Logo Creative Commons">
                </div>
            </a>
        </div>
    </div>
    <section class="landing-section landing-bottom"></section>
    <newsletter />
    <div class="footer-container">
        <div class="colored-divider-container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="flex footer-content container mx-auto">
            <div class="w-1/3">
                <div class="footer-logo">
                    <a><img src="../assets/img/footer.png" @click="$router.push({name: 'Home'})" /></a>
                </div>
            </div>
            <div class="w-1/3">
                <div class="footer-links">
                    <ul>
                        <li>
                            <a @click="$router.push({name: 'About'})">{{$t('about')}}</a>
                        </li>

                        <li>
                            <a @click="$router.push({name: 'BlogIndex'})">{{$t('blog.our')}}</a>
                        </li>

                        <li>
                            <a @click="$router.push({name: 'Terms'})">{{$t('terms-of-use')}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="w-1/3">
                <div class="footer-links">
                    <ul>
                        <li>
                            <a @click="$router.push({name: 'ShopIndex'})">{{$t('shop.title')}}</a>
                        </li>

                        <li>
                            <a @click="$router.push({name: 'ContactUs'})">{{$t('contact-us')}}</a>
                        </li>

                        <li>
                            <a @click="$router.push({name: 'TermsOfSale'})">{{$t('terms-of-sale')}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-content-bottom">
            <div class="container mx-auto">

                <div class="footer-inline-links">
                    <ul>
                        <li class="copyright"><a href="#">© Copyright 2018 Thingmill</a></li>
                        <li><a @click="$router.push({name: 'Legals'})">{{$t('legals')}}</a></li>
                    </ul>
                </div>
                <div class="footer-socials">
                    <socials />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import Socials from "./Socials.vue"
    import Newsletter from "./Newsletter.vue"
    export default {
        name: 'Footer-container',
        components: {
            "socials": Socials,
            "newsletter": Newsletter
        },
        data() {
            return {}
        }
    }
</script>
