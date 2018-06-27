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
                                {{$t('newsletter.form.submit')}}
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
                alert: {
                    enabled: false,
                    success: false,
                    title: "",
                    description: "",
                    icon: ""
                }
            }
        },
        methods: {
            submit: function () {
                this.alert.title = this.$t('newsletter.error.title')
                if (this.email != undefined && this.email != "") {
                    axios.post('https://newsletter-api.retrobox.tech/subscribe', {
                        email: this.email
                    }).then((response) => {
                        this.alert.success = true
                        this.alert.title = this.$t('newsletter.success.title')
                        this.alert.description = this.$t('newsletter.success.description')
                        this.$modal.show('newsletter_alert')
                    }).catch((error) => {
                        if (error.response) {
                            this.alert.description = this.$t('newsletter.error.invalid_description')
                            this.$modal.show('newsletter_alert')
                        } else {
                            this.alert.description = this.$t('newsletter.error.api_description')
                            this.$modal.show('newsletter_alert')
                        }
                    })
                }else{
                    this.alert.description = this.$t('newsletter.error.missing_description')
                    this.$modal.show('newsletter_alert')
                }
            }
        }
    }
</script>
