<template>
  <div class="footer">
    <div class="partnership-container">
      <div class="partnership-content container mx-auto">
        <a
          class="partnership-lyceealain partnership-item"
          href="https://lyceealainalencon.fr/">
          <Tooltip
            :value="$t('partnership.lyceealain.title')"
            class="partnership-lyceealain-image partnership-image">
            <img
              v-lazy="'https://static.retrobox.tech/website/lyceealain.webp'"
              alt="Logo Lycée Alain">
          </Tooltip>
        </a>
        <a
          class="partnership-cci partnership-item"
          href="https://www.portesdenormandie.cci.fr/">
          <Tooltip
            :value="$t('partnership.cci.title')"
            class="partnership-cci-image partnership-image">
            <img
              v-lazy="'https://static.retrobox.tech/website/ccinormandie.webp'"
              alt="Logo CCI Normandie">
          </Tooltip>
        </a>
        <a
          class="partnership-pcbway partnership-item"
          href="https://www.pcbway.com">
          <Tooltip
            :value="$t('partnership.pcbway.title')"
            class="partnership-pcbway-image partnership-image">
            <img
              v-lazy="'https://static.retrobox.tech/website/pcbway.webp'"
              alt="Logo Pcbway">
          </Tooltip>
        </a>
        <a
          class="partnership-creative-commons partnership-item"
          href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
          <Tooltip
            :value="$t('partnership.creative-commons.title')"
            class="partnership-creative-commons-image partnership-image">
            <img
              v-lazy="'https://static.retrobox.tech/website/creative-commons.webp'"
              alt="Logo Creative Commons">
          </Tooltip>
        </a>
      </div>
    </div>
    <Newsletter />
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
            <nuxt-link :to="localePath('index')">
              <img
                v-lazy="'https://static.retrobox.tech/website/footer.webp'"
                alt="Retrobox logo" />
            </nuxt-link>
          </div>
        </div>
        <div class="w-1/3">
          <div class="footer-links">
            <ul>
              <li>
                <nuxt-link :to="localePath('about')">
                  {{ $t('about') }}
                </nuxt-link>
              </li>

              <li>
                <nuxt-link :to="localePath('shop')">
                  {{ $t('shop.title') }}
                </nuxt-link>
              </li>

              <li>
                <nuxt-link :to="localePath('community')">
                  {{ $t('community.title') }}
                </nuxt-link>
              </li>

              <li>
                <a href="https://blog.retrobox.tech">
                  {{ $t('blog.title') }}
                </a>
              </li>

            </ul>
          </div>
        </div>
        <div class="w-1/3">
          <div class="footer-links">
            <ul>

              <li>
                <nuxt-link :to="localePath('contact-us')">
                  {{ $t('contact-us.title') }}
                </nuxt-link>
              </li>

              <li>
                <nuxt-link :to="localePath('terms')">
                  {{ $t('terms-of-use') }}
                </nuxt-link>
              </li>

              <li>
                <nuxt-link :to="localePath('terms-of-sale')">
                  {{ $t('terms-of-sale') }}
                </nuxt-link>
              </li>

              <li>
                <nuxt-link :to="localePath('privacy')">
                  {{ $t('privacy') }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-content-bottom">
        <div class="container mx-auto">
          <div class="footer-inline-links">
            <ul>
              <li class="copyright">
                <a href="#">© Copyright 2019 Thingmill</a>
              </li>
              <li>
                <nuxt-link :to="localePath('legals')">
                  {{ $t('legals') }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('credits')">
                  {{ $t('credits') }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer-socials">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon"
import Socials from "./Socials"
import Newsletter from "./Newsletter"
import Tooltip from "./Tooltip"

export default {
  name: 'Footer',
  components: {Tooltip, Newsletter, Socials, Icon},
  data: () => ({}),
  methods: {}
}
</script>
