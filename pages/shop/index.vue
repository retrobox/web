<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{ $t('shop.title') }}</h1>
      </div>
    </div>
    <div class="container mx-auto">
      <ShopHeader/>
      <div class="shop-index-container">
        <div
          v-if="items.length === 0"
          class="shop-empty-container">
          <div class="shop-empty-icon">
            <Icon value="far fa-times-circle"/>
          </div>
          <div class="shop-empty-title">
            <h3>
              {{ $t('shop.index.empty') }}
            </h3>
          </div>
        </div>
        <div
          v-if="items.length > 0"
          class="shop-index-category-mosaic">
          <div
            v-for="category in items"
            :key="category.id"
            class="shop-index-category">
            <h3 class="shop-index-category-title">{{ category.title }}</h3>
            <div>
              <div
                v-if="category.items.length === 0"
                class="shop-category-empty">
                <div>
                  <Icon value="far fa-times-circle"/>
                  <p>{{ $t('shop.category.empty') }}</p>
                </div>
              </div>
              <div
                v-if="category.items.length > 0"
                class="shop-card-mosaic">
                <ShopCard 
                  v-for="item in category.items"
                  :key="item.id"
                  :item="item"
                  data-aos="fade-in" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from "../../components/Icon"
  import ShopHeader from "../../components/ShopHeader"
  import LinkTo from "../../components/LinkTo"
  import ShopCard from "../../components/ShopCard"

  export default {
    components: {LinkTo, ShopHeader, Icon, ShopCard},
    head() {
      return {
        title: this.$t('shop.title')
      }
    },
    data: () => ({
      items: []
    }),
    async asyncData(context) {
      let response = await context.app.apitator.get(`/shop/${context.app.i18n.locale}/categories`)
      return {items: response.data.data.categories}
    }
  }
</script>
