<template>
    <div>
        <div class="cover-title">
            <div class="cover-title-content container mx-auto">
                <h1>{{$t('about')}}</h1>
            </div>
        </div>
        <div class="container mx-auto">
            <div class="article pt-4">
                <div class="content">
                    <div v-html="content">

                    </div>
                    <h2>{{$t('our-team-members')}}</h2>

                    <div class="team-mosaic">
                        <div class="team-item" v-for="member in members">
                            <img :src="member.image" alt="avatar">
                            <p class="team-item-title">{{member.name}}</p>
                            <p class="team-item-description">{{member.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
        data () {
            return {
                members: [],
                content: ''
            }
        },
        watch: {
            '$i18n.locale' () {
                this.fetchData()
            }
        },
        methods: {
            fetchData: function () {
                this.$store.commit('SET_TITLE', {context: this, key: 'about'})
                this.$store.commit('SET_LOCATION', {
                    root: this.$t('home'),
                    sub_root: this.$t('about')
                })
                var team = require('../assets/content/' + this.$i18n.locale + '/team.json')
                //shuffle the team
                var i = team.length;
                while (--i) {
                    var j = Math.floor(Math.random() * (i + 1))
                    var temp = team[i];
                    team[i] = team[j];
                    team[j] = temp;
                }
                this.members = team

                const content = require('../assets/content/' + this.$i18n.locale + '/about.md')
                this.content = content
            }
        },
        created () {
            this.fetchData()
        }
    }
</script>
