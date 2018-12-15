<template>
  <div class="footer">
    <section class="landing-section landing-bottom"></section>
    <div class="partnership-container">
      <div class="partnership-content container mx-auto">
        <a
          class="partnership-lyceealain partnership-item"
          href="https://lyceealainalencon.fr/">
          <Tooltip
            :value="$t('partnership.lyceealain.title')"
            class="partnership-lyceealain-image partnership-image">
            <img
              src="../assets/images/lyceealain.png"
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
              src="../assets/images/ccinormandie.png"
              alt="Logo CCI Normandie">
          </Tooltip>
        </a>
        <a
          class="partnership-creative-commons partnership-item"
          href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
          <Tooltip
            :value="$t('partnership.creative-commons.title')"
            class="partnership-creative-commons-image partnership-image">
            <img
              src="../assets/images/creative-commons.png"
              alt="Logo Creative Commons">
          </Tooltip>
        </a>
      </div>
    </div>
    <section class="landing-section landing-bottom"></section>
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
            <nuxt-link to="/">
              <img
                src="../assets/images/footer.png" />
            </nuxt-link>
          </div>
        </div>
        <div class="w-1/3">
          <div class="footer-links">
            <ul>
              <li>
                <nuxt-link to="/about">{{ $t('about') }}</nuxt-link>
              </li>

              <li>
                <a href="https://blog.retrobox.tech">{{ $t('blog.title') }}</a>
              </li>

              <li>
                <nuxt-link to="/terms">{{ $t('terms-of-use') }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-1/3">
          <div class="footer-links">
            <ul>
              <li>
                <a @click="$router.push({name: 'ShopIndex'})">{{ $t('shop.title') }}</a>
              </li>

              <li>
                <nuxt-link to="/contact-us">{{ $t('contact-us') }}</nuxt-link>
              </li>

              <li>
                <nuxt-link to="/terms-of-sale">{{ $t('terms-of-sale') }}</nuxt-link>
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
                <a href="#">© Copyright 2018 Thingmill</a>
              </li>
              <li>
                <nuxt-link to="/legals">{{ $t('legals') }}</nuxt-link>
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
