<template>
  <div>
    <div v-if="item == null">
      <Error
        :title="$t('not-found.title')"
        :description="$t('not-found.description')"
      />
    </div>
    <div v-else>
      <ShopCoverTitle :title="item.title" />
      <div class="container mx-auto">
        <ShopHeader/>
        <div class="shop-item-container">
          <div class="buy">
            <div class="buy-content">
              <div class="buy-images-container">
                <div class="buy-images-content">
                  <div class="buy-image-main">
                    <img
                      v-if="main !== undefined"
                      :src="main.url"
                      alt="Image alt"
                      @click="showImage(main.url)">
                  </div>
                  <div
                    v-if="not_main !== undefined"
                    class="buy-images-mosaic">
                    <div
                      v-for="image in not_main"
                      :key="image.id"
                      class="buy-image-item">
                      <img
                        :src="image.url"
                        alt="Image alt"
                        @click="showImage(image.url)">
                    </div>
                  </div>
                </div>
              </div>
              <div class="buy-description-container">
                <!-- <h3 class="buy-title">Retrobox, console</h3> -->
                <div
                  v-if="item.category.is_customizable"
                  class="buy-custom-container">
                  <!--custom sd size-->
                  <div class="buy-custom-type">
                    <div class="buy-custom-title">{{ $t('shop.item.custom.storage') }}</div>
                    <div class="buy-custom-mosaic storage">
                      <button
                        v-for="storage in storages"
                        :key="storage"
                        :class="{'selected': selectedStorage === storage}"
                        class="buy-custom-item"
                        @click="selectStorage(storage)">
                        {{ storage }} Go
                      </button>
                    </div>
                  </div>

                  <!--custom color-->
                  <div class="buy-custom-type">
                    <div class="buy-custom-title">{{ $t('shop.item.custom.color') }}</div>
                    <div class="buy-custom-mosaic button-colors">
                      <button
                        v-for="color in colors"
                        :key="color.color"
                        :style="'background-color:' + color.color"
                        :class="{'selected': color.color === selectedColor}"
                        class="buy-custom-item"
                        @click="selectColor(color.color)">
                      </button>
                    </div>
                  </div>

                  <div
                    v-if="item.show_version"
                    class="buy-custom-type">
                    <div class="buy-custom-title">{{ $t('shop.item.custom.model') }}</div>
                    <div class="buy-custom-mosaic buy-custom-version-mosaic model">
                      <!-- <li class="-mb-px mr-1">
                        <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold" href="#">Version kité</a>
                      </li> -->
                      <nuxt-link
                        v-for="link in item.category.items"
                        :key="link.id"
                        :to="localePath({name: 'shop-slug', params: {slug: link.slug}})"
                        :class="{'-mb-px': link.id === item.id, 'selected': link.id === item.id }"
                        class="buy-custom-item text-black">
                        {{ link.version }}
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="buy-price-container">
                  <div class="buy-price-currency">€</div>
                  <div class="buy-price-price">{{ price }}</div>
                </div>
                <div class="buy-actions">
                  <button
                    class="buy-main-button"
                    @click="toggleCart(item)">
                    <Icon value="fas fa-shopping-cart" />
                    <span v-if="$store.state.cart.filter(_item => _item.id === item.id).length === 0">{{ $t('shop.cart.add') }}</span>
                    <span v-else>{{ $t('shop.cart.remove') }}</span>
                  </button>
                </div>
                <div class="buy-social-share-container">
                  <div class="buy-social-share-text">
                    {{ $t('shop.item.share') }}
                  </div>
                  <div class="buy-social-share-mosaic">
                    <ul>
                      <li class="facebook">
                        <a
                          :href="$env.FACEBOOK_URL"
                          :title="$t('facebook.title')">
                          <Icon value="fab fa-facebook" />
                        </a>
                      </li>
                      <li class="twitter">
                        <a
                          :href="$env.TWITTER_URL"
                          :title="$t('twitter.title')">
                          <Icon value="fab fa-twitter" />
                        </a>
                      </li>
                      <li class="github">
                        <a
                          :href="$env.GITHUB_URL"
                          :title="$t('github.title')">
                          <Icon value="fab fa-github" />
                        </a>
                      </li>
                      <li class="discord">
                        <a
                          :href="$env.DISCORD_URL"
                          :title="$t('discord').title">
                          <Icon value="fab fa-discord" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  v-if="!item.category.is_customizable || $store.state.isMobile"
                  class="buy-description"
                  v-html="item.description_long">
                </div>
                <div class="buy-ways-container">
                  <!-- <div class="hint">Nous suportons ces moyens de payements :</div> -->
                  <div class="buy-ways-mosaic">
                    <div class="buy-way">
                      <i class="fab fa-cc-paypal"></i>
                    </div>
                    <div class="buy-way">
                      <i class="fab fa-cc-visa"></i>
                    </div>
                    <div class="buy-way">
                      <i class="fab fa-cc-stripe"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="item.category.is_customizable && !$store.state.isMobile"
              class="buy-extra-content buy-description-container">
              <div
                class="buy-description"
                v-html="item.description_long">
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        ref="imageModal"
        width="large"
        closing="primary">
        <div class="show-image-container">
          <img
            :src="imageToShow"
            alt="An shop item image">
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
  import marked from "marked"
  import ShopHeader from "~/components/ShopHeader"
  import Icon from "~/components/Icon"
  import Error from "~/components/Error"
  import Modal from "~/components/Modal"
  import ShopCoverTitle from "~/components/ShopCoverTitle"

  export default {
    name: 'ShopIndex',
    components: { ShopCoverTitle, Error, Icon, ShopHeader, Modal },
    head() {
      return {
        title: this.item == null ? 'Not found' : this.item.title,
        meta: [
          {property: 'og:title', content: this.item == null ? 'Not found' : this.item.title}
        ]
      }
    },
    data() {
      return {
        item: {
          show_version: false,
          category: {}
        },
        //url of image to show in modal
        imageToShow: '',
        selectedStorage: 16,
        //in gb
        storages: [
          16,
          32
        ],
        //in hex
        colors: [
          {color: "#ff4c4c", name: this.$t('shop.item.custom.colors.red')},
          {color: "#ffff66", name: this.$t('shop.item.custom.colors.yellow')},
          {color: "#68ff66", name: this.$t('shop.item.custom.colors.green')},
          {color: "#6666ff", name: this.$t('shop.item.custom.colors.blue')},
          {color: "#ffffff", name: this.$t('shop.item.custom.colors.white')},
          {color: "#4c4c4c", name: this.$t('shop.item.custom.colors.black')}
        ],
        selectedColor: "#ff4c4c",
        main: [],
        not_main: [],
        //showed price
        price: 0,
        original_price: 0,
        storage_prices: []
      }
    },
    watch: {
      'selectedStorage'() {
        this.price = this.original_price;
        this.price = this.price + this.storage_prices[this.selectedStorage];
        this.price = parseFloat(this.price.toFixed(2))
      }
    },
    methods: {
      showImage: function (url) {
        this.imageToShow = url
        this.$refs.imageModal.show()
      },
      selectStorage: function (size) {
        this.selectedStorage = size
      },
      selectColor: function (color) {
        this.selectedColor = color
      },
      toggleCart: function (item) {
        item.price = this.price
        if (item.category.is_customizable) {
          item.custom_options = {
            storage: this.selectedStorage,
            color: this.selectedColor
          }
        }
        this.$store.commit('CART_TOGGLE', {
          id: item.id,
          description_short: item.description_short,
          custom_options: item.custom_options,
          price: item.price,
          version: item.version,
          slug: item.slug,
          title: item.title,
          image: item.image,
          identifier: item.identifier,
          weight: item.weight
        })
        if (this.$store.state.cart.filter(_item => _item.id === item.id).length === 0) {
          this.$store.commit('ADD_ALERT', {
            type: 'success',
            title: this.$t('shop.cart.removed.title'),
            description: this.$t('shop.cart.removed.description')
          })
        } else {
          this.$store.commit('ADD_ALERT', {
            type: 'success',
            title: this.$t('shop.cart.added.title'),
            description: this.$t('shop.cart.added.description')
          })
        }
      }
    },
    async asyncData(context) {
      let response = await context.app.apitator.get(`/shop/${context.app.i18n.locale}/item/${context.params.slug}`).catch(() => {
        return false
      })
      if (!response) {
        return {item: null}
      } else {
        let item = response.data.data.item
        if (item == null) {
          return {item: null}
        } else {
          let storage_prices = []
          if (item.category.is_customizable) {
            let response = await context.app.apitator.get('/shop/storage-prices')
            storage_prices = response.data.data.storage_prices;
          }
          item.description_long = marked(item.description_long)
          let not_main = item.images.filter((item) => {
            return !item.is_main
          })
          let main = item.images.filter((item) => {
            return item.is_main
          })[0]
          let price = item.price
          let original_price = item.price
          return {
            item: item,
            main: main,
            original_price: original_price,
            price: price,
            not_main: not_main,
            storage_prices: storage_prices
          }
        }
      }
    }
  }
</script>
