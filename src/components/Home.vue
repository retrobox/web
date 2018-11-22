<template>
    <div class="landing-test">
        <div class="landing-main-back"></div>
        <div class="landing-main">
            <div class="landing-main-content">
                <h1 class="landing-main-title">{{$t('landing.title')}}</h1>
                <p class="landing-main-subtitle">{{$t('landing.sub_title')}}</p>
                <div class="landing-main-actions">
                    <a href="#go"
                       class="button bg-transparent hover:bg-blue text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                        {{$t('landing.go')}}
                    </a>
                    <a href="#" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full button">
                        <icon name="shopping-cart" class="icon"></icon>
                        {{$t('buy')}}
                    </a>
                </div>
            </div>
        </div>

        <section class="landing-section landing-about" id="go">
            <div class="landing-about-content">
              <div class="container">
                <div class="landing-about-text">
                    <h2 class="landing-about-title">{{$t('landing.about.title')}}</h2>
                    <p>
                        {{$t('landing.about.description')}}
                    </p>
                 </div>
                </div>
                <div class="landing-about-pic">
                    <img src="https://static.retrobox.tech/img/about/RETROBOX1.png">
                </div>
            </div>
        </section>
        <section class="landing-section landing-about3" id="go">
            <div class="landing-about-content2">
            </div>
        </section>
        <section class="landing-section landing-about2" id="go">
            <div class="landing-about-content2">
                <div class="landing-about-text">
                    <h2 class="landing-about-title">{{$t('landing.about.title')}}</h2>
                    <p>
                        {{$t('landing.about.description')}}
                    </p>
                </div>
                <div class="landing-about-pic">
                    <img src="https://static.retrobox.tech/img/about/RETROBOX1.png">
                </div>
            </div>
        </section>

        <section class="landing-section landing-advantages">
            <div class="landing-advantages-content">
                <h2 class="landing-advantages-title">
                    {{$t('landing.advantages.title')}}
                </h2>
                <div class="landing-columns">
                    <div class="landing-column">
                        <div class="landing-column-icon">
                            <div class="type-game">
                                <i class="icon fas fa-gamepad"></i>
                            </div>
                        </div>
                        <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2 title">{{$t('landing.advantages.game.title')}}
                                </div>
                                <p class="text-grey-darker text-base">
                                    {{$t('landing.advantages.game.description')}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="landing-column">
                        <div class="landing-column-icon">
                            <div class="type-custom">
                                <i class="fas fa-screwdriver"></i>
                            </div>
                        </div>
                        <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2 title">{{$t('landing.advantages.custom.title')}}</div>
                                <p class="text-grey-darker text-base">
                                    {{$t('landing.advantages.custom.description')}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="landing-column">
                        <div class="landing-column-icon">
                            <div class="type-connected">
                                <i class="icon fas fa-tachometer-alt"></i>
                            </div>
                        </div>
                        <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2 title">{{$t('landing.advantages.connected.title')}}
                                </div>
                                <p class="text-grey-darker text-base">
                                    {{$t('landing.advantages.connected.description')}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="landing-column">
                        <div class="landing-column-icon">
                            <div class="type-switch">
                                <i class="icon fas fa-tv"></i>
                            </div>
                        </div>
                        <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2 title">{{$t('landing.advantages.switch.title')}}
                                </div>
                                <p class="text-grey-darker text-base">
                                    {{$t('landing.advantages.switch.description')}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="landing-column">
                        <div class="landing-column-icon">
                            <div class="type-easy">
                                <i class="icon fas fa-gamepad"></i>
                            </div>
                        </div>
                        <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2 title">{{$t('landing.advantages.easy.title')}}
                                </div>
                                <p class="text-grey-darker text-base">
                                    {{$t('landing.advantages.easy.description')}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="landing-column">
                        <div class="landing-column-icon">
                            <div class="type-opensource">
                                <i class="icon fab fa-osi"></i>
                            </div>
                        </div>
                        <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2 title">{{$t('landing.advantages.opensource.title')}}
                                </div>
                                <p class="text-grey-darker text-base">
                                    {{$t('landing.advantages.opensource.description')}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="not-found">
          <div class="not-found-content">
            <div class="not-found-icon">
                <icon name="brands/youtube" class="icon" scale="1"></icon>
            </div>
            <div class="not-found-text">
              <h2 class="not-found-title">{{$t('coming-soon-video.title')}}</h2>
              <p class="not-found-description">{{$t('coming-soon-video.description')}}</p>
            </div>
          </div>
        </div>

        <section class="landing-section landing-startnow">
            <div class="landing-startnow-content container mx-auto">
                <h2 class="landing-startnow-title">{{$t('landing.start_now.title')}}</h2>
                <div class="landing-columns">
                    <div class="landing-column type-kited">
                        <div class="landing-column-icon">
                            <div>
                                <i class="fas fa-wrench"></i>
                            </div>
                        </div>
                        <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2 title">{{$t('landing.start_now.kited.title')}}</div>
                                <p class="text-grey-darker text-base">
                                    {{$t('landing.start_now.kited.description')}}
                                </p>
                            </div>

                            <div class="px-6 py-4 landing-column-footer">
                                <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">EUR 61.99</span>

                                <a @click="$router.push({name: 'ShopItem', params: {slug: 'retrobox-console-kited'}})"
                                  class="button bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full">
                                    <icon name="shopping-cart" class="icon"></icon>
                                    {{$t('buy')}}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="landing-column type-already">
                        <div class="landing-column-icon">
                            <div>
                                <i class="fas fa-box-open"></i>
                            </div>
                        </div>
                        <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2 title">{{$t('landing.start_now.non_kited.title')}}
                                </div>
                                <p class="text-grey-darker text-base">
                                    {{$t('landing.start_now.non_kited.description')}}
                                </p>
                            </div>
                            <div class="px-6 py-4 landing-column-footer">
                                <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">EUR 70.99</span>

                                <a @click="$router.push({name: 'ShopItem', params: {slug: 'retrobox-console-non_kited'}})"
                                   class="button bg-transparent hover:bg-blue text-blue font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded-full">
                                    <icon name="shopping-cart" class="icon"></icon>
                                    {{$t('buy')}}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {}
        },
        created () {
            this.$store.commit('SET_TITLE', {context: this, key: 'home'})
            this.$store.commit('SET_LOCATION', {
                root: this.$t('home')
            })
        }
    }
</script>
