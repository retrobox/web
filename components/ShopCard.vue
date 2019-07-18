<template>
  <div
    class="shop-card">
    <div 
      class="shop-card-thumb"
      @click="goTo()">
      <div
        :style="'background-image: url(' + item.image + ')'"
        class="shop-card-image"></div>
    </div>
    <div class="shop-card-content">
      <h4 
        class="shop-card-title" 
        @click="goTo()">
        {{ item.title }}
      </h4>
      <p 
        class="shop-card-description"
        @click="goTo()">
        {{ item.description_short }}
      </p>
      <div class="shop-card-footer">
        <span 
          class="price"
          @click="goTo()">
          € {{ item.price }}
        </span>
        <div
          v-if="removeMode"
          class="shop-card-remove-button"
          @click="$emit('removed')">
          <Icon value="fas fa-times-circle"/>
          Remove
        </div>
        <div
          v-else
          class="shop-card-buy-button"
          @click="goTo()">
          <Icon value="fas fa-shopping-cart"/>
          {{ $t('buy') }}
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon"

export default {
  name: 'ShopCard',
  components: { Icon },
  props: {
    item: {
      type: Object,
      default: null
    },
    removeMode: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goTo() {
      this.$router.push('/shop/' + this.item.slug)
    }
  }
}
</script>
