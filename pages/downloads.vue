<template>
  <div class="downloads">
    <div class="downloads-content container mx-auto">
      <div class="downloads-title-container">
        <div>
          <h2 class="downloads-title">
            {{ $t('downloads.page.title') }}
          </h2>
        </div>
      </div>
      <div class="downloads-container">
        <div class="downloads-description">
          {{ $t('downloads.page.description') }}
        </div>

        <div class="os-desktop">
          <div class="os-desktop-item win">
            <i class="icon fab fa-windows"></i>
            <div class="text">{{ $t('downloads.page.os-text.win') }}</div>
          </div>
          <div class="os-desktop-item mac">
            <i class="icon fab fa-apple"></i>
            <div class="text">{{ $t('downloads.page.os-text.mac') }}</div>
          </div>
          <div class="os-desktop-item lin">
            <i class="icon fab fa-linux"></i>
            <div class="text">{{ $t('downloads.page.os-text.lin') }}</div>
          </div>
        </div>

        <div class="os-mobile">
          <div class="os-mobile-item android"><i class="fab fa-android icon"></i></div>
          <div class="os-mobile-item apple"><i class="fab fa-apple icon"></i></div>
        </div>

        <div class="coming-soon"><h2>{{ $t('downloads.page.os-text.coming-soon') }}</h2></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: this.$t('downloads.page.title'),
        meta: [
          {property: 'og:title', content: this.$t('downloads.page.title')}
        ]
      }
    }
  }
</script>
