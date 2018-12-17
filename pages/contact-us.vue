<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{ $t('contact-us.title') }}</h1>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="article">
        <div class="content contact-us-container-container">
          <div class="contact-us-container">
            <div v-html="content">
            </div>
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2649.1831527803884!2d0.02048481564818878!3d48.39542577924495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e27535bafa57bb%3A0x7cd97fc8ad2efa55!2sThingmill!5e0!3m2!1sfr!2sfr!4v1530277084988"
                frameborder="0"
                style="border:0"
                allowfullscreen
                align="right"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContactUs',
    head () {
      return {
        title: this.$t('contact-us.title')
      }
    },
    data () {
      return {
        content: ''
      }
    },
    watch: {
      '$i18n.locale': function () {
        this.fetchData()
      }
    },
    mounted () {
      this.fetchData()
    },
    methods: {
      fetchData: function () {
        this.content = require('../assets/content/' + this.$i18n.locale + '/contact-us.md')
      }
    }
  }
</script>
