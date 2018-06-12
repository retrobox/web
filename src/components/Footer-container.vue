<template>
  <div>
    <div class="partnership-container">
        <div class="partnership-content container mx-auto">
            <a class="partnership-dyjixeu" href="https://dyjix.eu/?ref=retrobox.tech">
                <div class="partnership-dyjixeu-title">
                    {{$t('partnership.dyjixeu.title')}}
                </div>
                <div class="partnership-dyjixeu-image">
                    <img src="../assets/img/dyjixeu.png" alt="Logo Dyjix.eu">
                </div>
            </a>

            <a class="partnership-creative-commons" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
                <div class="partnership-creative-commons-title">
                    {{$t('partnership.creative-commons.title')}}
                </div>
                <div class="partnership-creative-commons-image">
                    <img src="../assets/img/creative-commons.png" alt="Logo Creative Commons">
                </div>
            </a>
        </div>
    </div>
    <section class="landing-section landing-bottom"></section>
    <!--<div class="newsletter-container">-->
       <!--<div class="newsletter-content container mx-auto">-->
         <!--<div class="newsletter-center">-->
           <!--<div class="newsletter-title-container">-->
             <!--<h2 class="newsletter-title">-->
               <!--{{$t('newsletter.title')}}-->
             <!--</h2>-->
             <!--<div class="newsletter-description">-->
                <!--{{$t('newsletter.description')}}-->
             <!--</div>-->
           <!--</div>-->
           <!--<div class="newsletter-form">-->
             <!--<div class="newsletter-form-input ">-->
               <!--<input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight"  type="text" id="email" :title="$t('newsletter.form.email')"  :placeholder="$t('newsletter.form.email_placeholder')">-->
             <!--</div>-->
             <!--<div class="newsletter-form-button">-->
               <!--<button class=" bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded button">{{$t('newsletter.form.submit')}}</button>-->
             <!--</div>-->
           <!--</div>-->
         <!--</div>-->
       <!--</div>-->
    <!--</div>-->
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
                            <a href="#">{{$t('blog')}}</a>
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
                            <a href="#">{{$t('get-help')}}</a>
                        </li>

                        <li>
                            <a href="#">{{$t('status')}}</a>
                        </li>

                        <li>
                            <a href="#">{{$t('developers')}}</a>
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
    export default {
        name: 'Footer-container',
        components: {
            "socials": Socials
        },
        data() {
            return {}
        }
    }
</script>
