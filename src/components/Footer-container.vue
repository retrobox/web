<template>
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
                            <a href="#">{{$t('about')}}</a>
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