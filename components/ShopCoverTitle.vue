<template>
  <div class="cover-title shop-cover-title">
    <div class="cover-title-content container mx-auto">
      <h1>{{ title }}</h1>
      <div class="shop-cover-preview">
        <div
          v-if="$store.state.isMobile"
          class="preview-badge">
          {{ $t('shop.preview.short') }}
        </div>
        <div
          v-else
          class="preview-badge">
          {{ $t('shop.preview.long') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCoverTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>