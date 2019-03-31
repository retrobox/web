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
