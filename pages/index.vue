<template>
  <div class="landing-back">
    <div
      :style="$imageAdapter(
        'https://static.retrobox.tech/website/landing-background-1',
        { css: true, fallback: '.jpg' }
      )"
      class="landing-main-back"
    ></div>
    <div class="landing-main">
      <div
        class="landing-main-content"
        data-aos="fade-up">
        <h1 class="landing-main-title">{{ $t('landing.title') }}</h1>
        <p class="landing-main-subtitle">{{ $t('landing.sub_title') }}</p>
        <div class="landing-main-actions">
          <button
            ref="goButton"
            class="landing-main-button-go button"
            @click="scrollToDescription()">
            {{ $t('landing.go') }}
          </button>
          <nuxt-link
            :to="localePath({name: 'shop-slug', params: {slug: 'retrobox-kit'}})"
            class="landing-main-button-shop button">
            <Icon value="fas fa-shopping-cart"/>
            {{ $t('buy') }}
          </nuxt-link>
        </div>
      </div>
    </div>

    <section
      id="go"
      class="landing-section first-landing landing-about landing-section-no-border">
      <div
        class="landing-about-content"
        data-aos="zoom-in">
        <div
          class="landing-about-text">
          <h2 class="landing-about-title">{{ $t('landing.about.title') }}</h2>
          <p>
            {{ $t('landing.about.description') }}
          </p>
        </div>
        <div class="landing-about-pic">
          <img
            v-lazy="$imageAdapter('https://static.retrobox.tech/website/landing-1')"
            alt="RetroBox console image">
        </div>
      </div>
    </section>

    <section
      ref="secondDivider"
      class="landing-divider-background-container second-landing">
      <div
        :style="showSecondDivider ? $imageAdapter(
          'https://static.retrobox.tech/website/landing-background-2',
          { css: true, fallback: '.jpg' }
        ) : ''"
        class="landing-divider-background-image"
      ></div>
    </section>

    <section
      id="divider"
      class="landing-section thirth-landing landing-about landing-section-no-border  landing-about-2">
      <div
        class="landing-about-content"
        data-aos="fade-left">
        <div class="landing-about-pic">
          <img
            v-lazy="$imageAdapter('https://static.retrobox.tech/website/landing-2')"
            alt="RetroBox console in hands">
        </div>
        <div class="landing-about-text">
          <div>
            <h2 class="landing-about-title">{{ $t('landing.about-us.title') }}</h2>
            <p>
              {{ $t('landing.about-us.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="landing-section landing-advantages landing-section-no-border">
      <div class="landing-advantages-content">
        <h2 class="landing-advantages-title">
          {{ $t('landing.advantages.title') }}
        </h2>
        <div>
          <div class="landing-columns">
            <div
              class="landing-column"
              data-aos="fade-in">
              <div class="landing-column-icon">
                <div class="type-game">
                  <Icon value="fas fa-gamepad"/>
                </div>
              </div>
              <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 title">{{ $t('landing.advantages.game.title') }}
                  </div>
                  <p class="text-grey-darker text-base">
                    {{ $t('landing.advantages.game.description') }}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="landing-column"
              data-aos="fade-in">
              <div class="landing-column-icon">
                <div class="type-custom">
                  <Icon value="fas fa-screwdriver"/>
                </div>
              </div>
              <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 title">{{ $t('landing.advantages.custom.title') }}</div>
                  <p class="text-grey-darker text-base">
                    {{ $t('landing.advantages.custom.description') }}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="landing-column"
              data-aos="fade-in">
              <div class="landing-column-icon">
                <div class="type-connected">
                  <Icon value="fas fa-tachometer-alt"/>
                </div>
              </div>
              <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 title">{{ $t('landing.advantages.connected.title') }}
                  </div>
                  <p class="text-grey-darker text-base">
                    {{ $t('landing.advantages.connected.description') }}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="landing-column"
              data-aos="fade-in">
              <div class="landing-column-icon">
                <div class="type-switch">
                  <Icon value="fas fa-tv"/>
                </div>
              </div>
              <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 title">{{ $t('landing.advantages.switch.title') }}
                  </div>
                  <p class="text-grey-darker text-base">
                    {{ $t('landing.advantages.switch.description') }}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="landing-column"
              data-aos="fade-in">
              <div class="landing-column-icon">
                <div class="type-easy">
                  <Icon value="fas fa-gamepad"/>
                </div>
              </div>
              <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 title">{{ $t('landing.advantages.easy.title') }}
                  </div>
                  <p class="text-grey-darker text-base">
                    {{ $t('landing.advantages.easy.description') }}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="landing-column"
              data-aos="fade-in">
              <div class="landing-column-icon">
                <div class="type-opensource">
                  <Icon value="fab fa-osi"/>
                </div>
              </div>
              <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 title">{{ $t('landing.advantages.opensource.title') }}
                  </div>
                  <p class="text-grey-darker text-base">
                    {{ $t('landing.advantages.opensource.description') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Error
      :title="$t('coming-soon-video.title')"
      :description="$t('coming-soon-video.description')"
      class="landing-error"
      icon="fab fa-youtube"
    />

    <section class="landing-section landing-startnow">
      <div class="landing-startnow-content container mx-auto">
        <h2
          class="landing-startnow-title"
          data-aos="fade-in">{{ $t('landing.start_now.title') }}</h2>
        <div
          class="landing-columns"
          data-aos="fade-in">
          <div class="landing-column type-kited">
            <div class="landing-column-icon">
              <div>
                <Icon value="fas fa-wrench"/>
              </div>
            </div>
            <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 title">{{ $t('landing.start_now.kited.title') }}</div>
                <p class="text-grey-darker text-base">
                  {{ $t('landing.start_now.kited.description') }}
                </p>
              </div>

              <div class="px-6 py-4 landing-column-footer">
                <span
                  class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">EUR 61.99</span>

                <nuxt-link
                  :to="localePath({name: 'shop-slug', params: {slug: 'retrobox-kit'}})"
                  class="button bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full">
                  <Icon value="fas fa-shopping-cart"/>
                  {{ $t('buy') }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="landing-column type-already">
            <div class="landing-column-icon">
              <div>
                <Icon value="fas fa-box-open"/>
              </div>
            </div>
            <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 title">{{ $t('landing.start_now.non_kited.title') }}
                </div>
                <p class="text-grey-darker text-base">
                  {{ $t('landing.start_now.non_kited.description') }}
                </p>
              </div>
              <div class="px-6 py-4 landing-column-footer">
                <span
                  class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">EUR 70.99</span>

                <nuxt-link
                  :to="localePath({name: 'shop-slug', params: {slug: 'retrobox-non-kit'}})"
                  class="button bg-transparent hover:bg-blue focus:bg-blue text-blue font-semibold hover:text-white focus:text-white py-2 px-4 border border-blue hover:border-transparent rounded-full">
                  <Icon value="fas fa-shopping-cart"/>
                  {{ $t('buy') }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Icon from "~/components/Icon"
  import Error from "~/components/Error"
  import { generateMetas } from "../headHelper"

  export default {
    components: {Error, Icon},
    head() {
      return {
        ...{titleTemplate: '%s'},
        ...generateMetas(this, {
          title: this.$t('title'),
          description: this.$t('description')
        })
      }
    },
    data: () => ({
      showSecondDivider: false
    }),
    mounted() {
      if (!this.$isServer) {
        if (!this.$isSafari) {
          window.removeEventListener('scroll', this.checkInView)
          window.addEventListener('scroll', this.checkInView)
          this.checkInView()
        } else {
          this.showSecondDivider = true
        }
      }
    },
    destroyed() {
      window.removeEventListener('scroll', this.checkInView)
    },
    methods: {
      scrollToDescription: function () {
        this.$scrollTo('#go')
      },
      checkInView: function () {
        if (this.showSecondDivider || this.$refs.secondDivider === undefined)
          return
        let el = this.$refs.secondDivider
        let bounding = el.getBoundingClientRect()
        let inView = (
          (bounding.top < Math.max(document.documentElement.clientHeight, window.innerHeight || 0) &&
            bounding.top + el.clientHeight > 0) &&
          (bounding.left < Math.max(document.documentElement.clientWidth, window.innerWidth || 0) &&
            bounding.left + el.clientWidth > 0)
        )
        if (inView && !this.showSecondDivider)
          this.showSecondDivider = true
      }
    }
  }
</script>
