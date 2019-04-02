<template>
  <div class="download">
    <div class="download-content">
      <div class="download-title-container">
        <div>
          <h2 class="download-title">
            {{ $t('download.page.title') }}
          </h2>

          <div class="download-description">
            {{ $t('download.page.description') }}
          </div>

          <div class="os-icon">
            <div class="win-icon os-icon"><i class="fab fa-windows"></i></div>
            <div class="mac-icon os-icon"><i class="fab fa-apple"></i></div>
            <div class="lin-icon os-icon"><i class="fab fa-linux"></i></div>
          </div>

          <div class="os-text">
            <div class="win-text"><h2>Windows 7/8/10</h2></div>
            <div class="mac-text"><h2>Mac OS</h2></div>
            <div class="lin-text"><h2>Linux</h2></div>
          </div>

          <div class="os-icon">
            <div class="android-icon os-icon"><i class="fab fa-android"></i></div>
            <div class="ios-icon os-icon"><i class="fab fa-apple"></i></div>
          </div>

          <div class="coming-soon"><h2>Bientôt sur Android et iOS</h2></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: this.$t('download.page.title'),
        meta: [
          {property: 'og:title', content: this.$t('download.page.title')}
        ]
      }
    }
  }
</script>
