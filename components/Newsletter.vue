<template>
  <div>
    <div class="newsletter-back">
    </div>
    <div class="newsletter-container">
      <div class="newsletter-content container mx-auto">
        <div class="newsletter-center">
          <div class="newsletter-title-container">
            <h2 class="newsletter-title">
              {{ $t('newsletter.title') }}
            </h2>
            <div class="newsletter-description">
              {{ $t('newsletter.description') }}
            </div>
          </div>
          <div class="newsletter-form">
            <div class="newsletter-form-input">
              <input
                id="email"
                :title="$t('newsletter.form.email')"
                :placeholder="$t('newsletter.form.email_placeholder')"
                v-model="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight"
                type="text" />
            </div>
            <div class="newsletter-form-button">
              <button
                class="button button-primary w-full"
                @click="submit()">
                <span v-if="loading === false">{{ $t('newsletter.form.submit') }}</span>
                <div
                  v-if="loading"
                  class="newsletter-loading">
                  <Icon
                    value="fas fa-sync"
                    spin />
                  {{ $t('loading') }}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon"
export default {
  name: 'Newsletter',
  components: {Icon},
  data() {
    return {
      email: '',
      loading: false
    }
  },
  methods: {
    submit: function () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1300)
      if (this.email !== undefined && this.email !== '') {
        this.$apitator.post('/newsletter/subscribe', {
          email: this.email
        }).then(() => {
          this.email = ''
          this.$store.commit('ADD_ALERT', {
            type: 'success',
            title: this.$t('newsletter.success.title'),
            description: this.$t('newsletter.success.description')
          })
          this.loading = false
        }).catch(error => {
          if (error.response) {
            if (error.response.data.errors.title === 'Member Exists') {
              this.$store.commit('ADD_ALERT', {
                type: 'error',
                title:  this.$t('newsletter.error.title'),
                description: this.$t('newsletter.error.member_exists')
              })
            } else {
              this.$store.commit('ADD_ALERT', {
                type: 'error',
                title:  this.$t('newsletter.error.title'),
                description: this.$t('newsletter.error.invalid_description')
              })
            }
          } else {
            this.$store.commit('ADD_ALERT', {
              type: 'error',
              title:  this.$t('newsletter.error.title'),
              description: this.$t('newsletter.error.api_description')
            })
          }
          this.loading = false
        })
      }else{
        this.$store.commit('ADD_ALERT', {
          type: 'error',
          title:  this.$t('newsletter.error.title'),
          description: this.$t('newsletter.error.missing_description')
        })
        this.loading = false
      }
    }
  }
}
</script>
