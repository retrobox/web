<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{ $t('about') }}</h1>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="article pt-4">
        <div class="content">
          <div v-html="content">
          </div>
          <h2 class="dividing">{{ $t('our-team-members') }}</h2>
          <div class="team-mosaic">
            <div
              v-for="member in members"
              :key="member.name"
              class="team-item">
              <img
                :src="member.image"
                class="team-item-image"
                alt="avatar">
              <p class="team-item-title">{{ member.name }}</p>
              <p class="team-item-description">{{ member.description }}</p>
            </div>
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
        title: this.$t('about'),
        meta: [
          {property: 'og:title', content: this.$t('about')}
        ]
      }
    },
    data () {
      return {
        members: [],
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
        let team = require('~/assets/content/' + this.$i18n.locale + '/team.json')
        //shuffle the team
        let i = team.length;
        while (--i) {
          let j = Math.floor(Math.random() * (i + 1))
          let temp = team[i];
          team[i] = team[j];
          team[j] = temp;
        }
        this.members = team
        this.content = require('~/assets/content/' + this.$i18n.locale + '/about.md')
      }
    }
  }
</script>
