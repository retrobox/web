<template>
    <div>
        <div class="newsletter-back">
        </div>
        <div class="newsletter-container">
            <div class="newsletter-content container mx-auto">
                <div class="newsletter-center">
                    <div class="newsletter-title-container">
                        <h2 class="newsletter-title">
                            {{$t('newsletter.title')}}
                        </h2>
                        <div class="newsletter-description">
                            {{$t('newsletter.description')}}
                        </div>
                    </div>
                    <div class="newsletter-form">
                        <div class="newsletter-form-input">
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight"
                                   type="text" id="email" :title="$t('newsletter.form.email')"
                                   :placeholder="$t('newsletter.form.email_placeholder')" v-model="email">
                        </div>
                        <div class="newsletter-form-button">
                            <button class=" bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded button"
                                    @click="submit()">
                                <span v-if="loading == false">{{$t('newsletter.form.submit')}}</span>
                                <div v-if="loading" class="newsletter-loading">
                                    <icon name="sync" spin class="icon"></icon> {{$t('loading')}}</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Newsletter',
        data() {
            return {
                email: "",
                loading: false
            }
        },
        methods: {
            submit: function () {
                this.loading = true
                if (this.email != undefined && this.email != "") {
                    axios.post('https://newsletter-api.retrobox.tech/subscribe', {
                        email: this.email
                    }).then((response) => {
                        this.$store.commit('ADD_ALERT', {
                          type: 'success',
                          title: this.$t('newsletter.success.title'),
                          description: this.$t('newsletter.success.description')
                        })
                            this.loading = false
                    }).catch((error) => {
                        if (error.response) {

                            if (error.response.data.error.slug) {
                              this.$store.commit('ADD_ALERT', {
                                type: 'error',
                                title:  this.$t('newsletter.error.title'),
                                description: this.$t('newsletter.error.member_exists')
                              })
                            }else{
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
