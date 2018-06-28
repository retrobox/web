<template>
<div>
  <fade-transition group>
    <div v-if="$store.state.loading" key="$store.state.loading">
      <div class="loading">
        <icon name="sync" spin scale="3"></icon>
      </div>
    </div>
    <div v-if="$store.state.loading == false" key="$store.state.loading">
      <div v-if="item == null">
        <div>
          <not-found />
        </div>
      </div>
      <div v-else>
        <div class="cover-title">
          <div class="cover-title-content container mx-auto">
            <h1>{{item.title}}</h1>
          </div>
        </div>
        <div class="container mx-auto">
          <shop-header></shop-header>
          <div class="shop-item-container">
            <div class="buy">
              <ul class="list-reset flex border-b buy-nav" v-if="item.show_version">
                <li class="-mb-px mr-1">
                  <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold" href="#">Version kité</a>
                </li>
                <li class="mr-1">
                  <a class="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker" href="#">Version non kité</a>
                </li>
              </ul>
              <div class="buy-content">
                <div class="buy-description-container">
                  <!-- <h3 class="buy-title">Retrobox, console</h3> -->
                  <div class="buy-description" v-html="item.description_long">
                  </div>
                  <div class="buy-price">
                    <span>€ {{item.price}}</span>
                  </div>
                  <div class="buy-actions">
                    <button class="action-buy bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 rounded inline-flex items-center button" @click="toggleCart(item)">
                        <span><i class="fas fa-shopping-cart"></i></span>
                        <span v-if="$store.state.cart[this.$store.state.cart.indexOf(item)] == undefined">{{$t('shop.cart.add')}}</span>
                        <span v-else>{{$t('shop.cart.remove')}}</span>
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
                      <div class="buy-way">
                        <i class="fab fa-cc-amazon-pay"></i>
                      </div>
                      <div class="buy-way">
                        <i class="fab fa-cc-paypal"></i>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="buy-images-container">
                  <div class="buy-images-content">
                    <div class="buy-image-main">
                      <img src="https://cdn.shopify.com/s/files/1/0020/9374/4179/products/storeIMAGE_1024x1024.png?v=1526207947">
                    </div>
                    <div class="buy-images-mosaic">
                      <div class="buy-image-item">
                        <img src="https://cdn.shopify.com/s/files/1/0020/9374/4179/products/storeIMAGE_1024x1024.png?v=1526207947">
                      </div>
                      <div class="buy-image-item">
                        <img src="https://cdn.shopify.com/s/files/1/0020/9374/4179/products/weather_1024x1024.png?v=1526207947">
                      </div>
                      <div class="buy-image-item">
                        <img src="https://cdn.shopify.com/s/files/1/0020/9374/4179/products/Fb_2.52.51_PM_1024x1024.png?v=1526207947">
                      </div>
                      <div class="buy-image-item">
                        <img src="https://cdn.shopify.com/s/files/1/0020/9374/4179/products/storeIMAGE_1024x1024.png?v=1526207947">
                      </div>
                      <div class="buy-image-item">
                        <img src="https://cdn.shopify.com/s/files/1/0020/9374/4179/products/weather_1024x1024.png?v=1526207947">
                      </div>
                      <div class="buy-image-item">
                        <img src="https://cdn.shopify.com/s/files/1/0020/9374/4179/products/Fb_2.52.51_PM_1024x1024.png?v=1526207947">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fade-transition>
</div>
</template>

<script>
import axios from "axios"
import marked from "marked"
import Header from "./Header.vue"
import NotFound from "../NotFound.vue";
export default {
  name: 'ShopIndex',
  data() {
    return {
      item: {}
    }
  },
  watch: {
    '$i18n.locale' () {
      this.fetchData()
    },
    '$route.params' () {
      this.fetchData()
    }
  },
  components: {
    "shop-header": Header,
    "not-found": NotFound
  },
  methods: {
    toggleCart: function(item) {
      this.$store.commit('CART_TOGGLE', item)
      if (this.$store.state.cart[this.$store.state.cart.indexOf(item)] == undefined) {
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
    },
    fetchData: function() {
      this.$store.commit('SET_LOCATION', {
        root: this.$t('shop.title')
      })

      this.$apitator.query(this, {
        body: {
          query: `query ($slug: String!){
          	getOneShopItem(slug: $slug)
          	{
          		id,
          		title,
          		price,
          		description_long,
          		description_short,
          		version,
              show_version,
          		category {
          			id
          			items {
          				title,
          				id,
                  version
          			}
          		}
          	}
          }`,
          variables: {
            slug: this.$route.params.slug
          }
        }
      }).then((response) => {
        this.item = response.data.data.getOneShopItem
        if (this.item == null) {
          this.$store.commit('SET_TITLE', this.$t('not-found.title'))
        } else {
          this.item.description_long = marked(this.item.description_long)
          this.$store.commit('SET_TITLE', this.item.title)
        }
      })
    }
  },
  created() {
    this.fetchData()
  }
}
</script>
