<template>
  <div>
    <div v-if="item == null">
      <div class="not-found">
        <div class="not-found-content">
          <div class="not-found-icon">
            <Icon value="fas fa-exclamation-circle" />
          </div>
          <div class="not-found-text">
            <h2 class="not-found-title">{{ $t('not-found.title') }}</h2>
            <p class="not-found-description">{{ $t('not-found.description') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="cover-title">
        <div class="cover-title-content container mx-auto">
          <h1>{{ item.title }}</h1>
        </div>
      </div>
      <div class="container mx-auto">
        <ShopHeader />
        <div class="shop-item-container">
          <div class="buy">
            <ul
              v-if="item.show_version"
              class="list-reset flex border-b buy-nav">
              <!-- <li class="-mb-px mr-1">
                <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold" href="#">Version kité</a>
              </li> -->
              <li
                v-for="link in item.category.items"
                :key="link.id"
                :class="{'-mb-px': link.id === item.id }"
                class="mr-1">
                <nuxt-link
                  :class="{'text-blue-dark font-semibold border-l border-t border-r rounded-t': link.id === item.id }"
                  :to="'/shop/' + link.slug"
                  class="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker">{{ link.version }}</nuxt-link>
              </li>
            </ul>
            <div class="buy-content">
              <div class="buy-description-container">
                <!-- <h3 class="buy-title">Retrobox, console</h3> -->
                <div
                  class="buy-description"
                  v-html="item.description_long">
                </div>
                <div
                  v-if="item.category.is_customizable"
                  class="buy-custom-container">
                  <!--custom sd size-->
                  <div class="buy-custom-type">
                    <div class="buy-custom-title">{{ $t('shop.item.custom.storage') }}</div>
                    <div class="buy-custom-mosaic storage">
                      <div
                        v-for="storage in storages"
                        :key="storage"
                        :class="{'selected': selectedStorage === storage}"
                        class="buy-custom-item"
                        @click="selectStorage(storage)">
                        {{ storage }} Gb
                      </div>
                    </div>
                  </div>

                  <!--custom color-->
                  <div class="buy-custom-type">
                    <div class="buy-custom-title">{{ $t('shop.item.custom.color') }}</div>
                    <div class="buy-custom-mosaic button-colors">
                      <div
                        v-for="color in colors"
                        :key="color.color"
                        :style="'background-color:' + color.color"
                        :class="{'selected': color.color === selectedColor}"
                        class="buy-custom-item"
                        @click="selectColor(color.color)">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buy-price">
                  <span>€ {{ price }}</span>
                </div>
                <div class="buy-actions">
                  <button
                    class="action-buy bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 rounded inline-flex items-center button"
                    @click="toggleCart(item)">
                    <span><i class="fas fa-shopping-cart"></i></span>
                    <span v-if="$store.state.cart[this.$store.state.cart.indexOf(item)] === undefined">{{ $t('shop.cart.add') }}</span>
                    <span v-else>{{ $t('shop.cart.remove') }}</span>
                  </button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <no-ssr>
      <modal
        name="show_image"
        class="modal show-image-modal">
        <div class="modal-container">
          <div class="show-image-container">
            <img
              :src="to_show"
              alt="An shop item image">
          </div>
        </div>
        <div
          class="button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 cancel-button"
          @click="$modal.hide('show_image')">
          {{ $t('close') }}
        </div>
      </modal>
    </no-ssr>
  </div>
</template>

<script>
  import marked from "marked"
  import ShopHeader from "../../components/ShopHeader"
  import Icon from "../../components/Icon"

  export default {
    name: 'ShopIndex',
    components: {Icon, ShopHeader},
    head () {
      return {
        title: this.item == null ? 'Not found' : this.item.title
      }
    },
    data() {
      return {
        item: {},
        //url of image to show in modal
        to_show: "",
        selectedStorage: 8,
        //in gb
        storages: [
          8,
          16,
          32
        ],
        //in hex
        colors: [
          {color: "#ff0000", name: this.$t('shop.item.custom.colors.red')},
          {color: "#ffff00", name: this.$t('shop.item.custom.colors.yellow')},
          {color: "#00ff00", name: this.$t('shop.item.custom.colors.green')},
          {color: "#0000ff", name: this.$t('shop.item.custom.colors.blue')},
          {color: "#9400d3", name: this.$t('shop.item.custom.colors.purple')}
        ],
        selectedColor: "#ff0000",
        main: [],
        not_main: [],
        //showed price
        price: 0,
        original_price: 0
      }
    },
    watch: {
      '$route.params'() {
        this.fetchData()
      },
      'selectedStorage'() {
        this.price = this.original_price
        if (this.selectedStorage === 16) {
          this.price = this.price + 2.55
        }
        if (this.selectedStorage === 32) {
          this.price = this.price + 3.55
        }
        this.price = parseFloat(this.price.toFixed(2))
      }
    },
    methods: {
      showImage: function (url) {
        this.to_show = url
        this.$modal.show('show_image')
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
        this.$store.commit('CART_TOGGLE', item)
        if (this.$store.state.cart[this.$store.state.cart.indexOf(item)] === undefined) {
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
    async asyncData (context) {
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
            not_main: not_main
          }
        }
      }
    }
  }
</script>
