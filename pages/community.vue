<template>
  <div class="community">
    <div class="community-content">
      <div class="community-title-container">
        <div>
          <h2 class="community-title">
            {{ $t('community.page.title') }}
          </h2>

          <div class="community-description">
            {{ $t('community.page.description') }}
          </div>
        </div>
      </div>
      <div class="community-discord-container">
        <iframe
          src="https://discordapp.com/widget?id=401857345677950976&theme=dark"
          height="500"
          allowtransparency="true"
          frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: this.$t('community.page.title'),
        meta: [
          {property: 'og:title', content: this.$t('community.page.title')}
        ]
      }
    }
  }
</script>