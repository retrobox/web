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
              v-lazy="$imageAdapter('https://static.retrobox.tech/website/lyceealain')"
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
              v-lazy="$imageAdapter('https://static.retrobox.tech/website/ccinormandie')"
              alt="Logo CCI Normandie">
          </Tooltip>
        </a>
        <a
          class="partnership-pcbway partnership-item"
          href="https://www.pcbway.com/setinvite.aspx?inviteid=317110">
          <Tooltip
            :value="$t('partnership.pcbway.title')"
            class="partnership-pcbway-image partnership-image">
            <img
              v-lazy="$imageAdapter('https://static.retrobox.tech/website/pcbway')"
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
              v-lazy="$imageAdapter('https://static.retrobox.tech/website/creative-commons')"
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
                v-lazy="$imageAdapter('https://static.retrobox.tech/website/footer')"
                alt="RetroBox logo" />
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
              <nuxt-link :to="localePath('contact-us')">
                <li>
                  {{ $t('contact-us.title') }}
                </li>
              </nuxt-link>

              <nuxt-link :to="localePath('terms')">
                <li>
                  {{ $t('terms-of-use') }}
                </li>
              </nuxt-link>

              <nuxt-link :to="localePath('terms-of-sale')">
                <li>
                  {{ $t('terms-of-sale') }}
                </li>
              </nuxt-link>

              <nuxt-link :to="localePath('privacy')">
                <li>
                  {{ $t('privacy') }}
                </li>
              </nuxt-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-content-bottom">
        <div class="container mx-auto">
          <div class="footer-inline-links">
            <ul>
              <li class="copyright">
                <a href="https://thingmill.fr">© Copyright 2021 Thingmill</a>
              </li>
              <nuxt-link :to="localePath('legals')">
                <li>
                  {{ $t('legals') }}
                </li>
              </nuxt-link>
              <nuxt-link :to="localePath('credits')">
                <li>
                  {{ $t('credits') }}
                </li>
              </nuxt-link>
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
