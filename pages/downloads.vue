<template>
  <div class="downloads">
    <div class="downloads-content">
      <div class="downloads-title-container">
        <div>
          <h2 class="downloads-title">
            {{ $t('downloads.page.title') }}
          </h2>

          <div class="downloads-description">
            {{ $t('downloads.page.description') }}
          </div>

          <div class="os-icon">
            <div class="win-icon os-icon"><i class="fab fa-windows"></i></div>
            <div class="mac-icon os-icon"><i class="fab fa-apple"></i></div>
            <div class="lin-icon os-icon"><i class="fab fa-linux"></i></div>
          </div>

          <div class="os-text">
            <div class="win-text"><h2>{{ $t('downloads.page.os-text.win') }}</h2></div>
            <div class="mac-text"><h2>{{ $t('downloads.page.os-text.mac') }}</h2></div>
            <div class="lin-text"><h2>{{ $t('downloads.page.os-text.lin') }}</h2></div>
          </div>

          <div class="os-icon">
            <div class="android-icon os-icon"><i class="fab fa-android"></i></div>
            <div class="ios-icon os-icon"><i class="fab fa-apple"></i></div>
          </div>

          <div class="coming-soon"><h2>{{ $t('downloads.page.os-text.coming-soon') }}</h2></div>

        </div>
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
