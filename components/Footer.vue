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
            <LinkTo>
              <img
                src="../assets/images/footer.png" />
            </LinkTo>
          </div>
        </div>
        <div class="w-1/3">
          <div class="footer-links">
            <ul>
              <li>
                <LinkTo to="/about">
                  {{ $t('about') }}
                </LinkTo>
              </li>

              <li>
                <LinkTo to="/community">
                  {{ $t('community.title') }}
                </LinkTo>
              </li>

              <li>
                <a href="https://blog.retrobox.tech">
                  {{ $t('blog.title') }}
                </a>
              </li>

              <li>
                <LinkTo to="/terms">
                  {{ $t('terms-of-use') }}
                </LinkTo>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-1/3">
          <div class="footer-links">
            <ul>
              <li>
                <LinkTo to="/shop">
                  {{ $t('shop.title') }}
                </LinkTo>
              </li>

              <li>
                <LinkTo to="/contact-us">
                  {{ $t('contact-us.title') }}
                </LinkTo>
              </li>

              <li>
                <LinkTo to="/terms-of-sale">
                  {{ $t('terms-of-sale') }}
                </LinkTo>
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
import LinkTo from "./LinkTo"
export default {
  name: 'Footer',
  components: {LinkTo, Tooltip, Newsletter, Socials, Icon},
  data: () => ({}),
  methods: {}
}
</script>
