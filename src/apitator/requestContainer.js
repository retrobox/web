import axios from 'axios'

const merge = require('webpack-merge')
export default class requestContainer {
    constructor(Vue, options) {
        this.Vue = Vue
        this.options = options
    }

    get(VueLocal, url, params = {}) {
        var headers = {}
        var params = merge(params, this.options.params, {
            headers: headers
        })
        return new Promise((resolve, reject) => {
            VueLocal.$store.commit('SET_LOADING', true)
            params = merge(params, {
                headers: headers
            })
            axios.get(this.options.rootUrl + url, params)
                .then((response) => {
                    if (params.loading_persit == false || params.loading_persit == undefined) {
                        VueLocal.$store.commit('SET_LOADING', false)
                    }
                    resolve(response)
                })
                .catch((error) => {
                    console.log(error)
                    // console.log(VueLocal.$store.state.http_api_error)
                    //add 1 error
                    VueLocal.$store.commit('ADD_HTTP_API_ERROR')
                    if (VueLocal.$store.state.http_api_error > 3) {
                        VueLocal.$store.commit('SET_LOADING', false)
                        VueLocal.$store.commit('SET_HTTP_API_ERROR', 0)
                        if (params.alert_on_error != false) {
                            VueLocal.$store.commit('ADD_ALERT', {
                                type: "error",
                                title: VueLocal.$t('api.error.title'),
                                description: VueLocal.$t('api.error.description')
                            })
                        }

                        reject(error)
                    } else {
                        this.get(VueLocal, url, params).then(resolve).catch(reject)
                    }
                })
        });

    }

    //
    post(VueLocal, url, body, _params) {
        return new Promise((resolve, reject) => {
            VueLocal.$store.commit('SET_LOADING', true)
            if (_params.with_auth == true) {
                var user_token = VueLocal.$cookie.get('user_token')
                var headers = {
                    'Authorization': 'Bearer ' + user_token
                }
            } else {
                var headers = {}
            }
            var params = merge(_params, this.options.params, {
                headers: headers
            })
            return axios.post(this.options.rootUrl + url, body, params)
                .then(response => {
                    if (params.loading_persit == false || params.loading_persit == undefined) {
                        VueLocal.$store.commit('SET_LOADING', false)
                    }
                    resolve(response)
                })
                .catch(error => {
                    console.log(error);
                    //add 1 error
                    VueLocal.$store.commit('ADD_HTTP_API_ERROR', 1)
                    if (VueLocal.$store.state.http_api_error > 3) {
                        VueLocal.$store.commit('SET_LOADING', false)
                        VueLocal.$store.commit('ADD_ALERT', {
                            type: VueLocal.$t('api.error.title'),
                            text: VueLocal.$t('api.error.description')
                        })

                        reject(error)
                    } else {
                        this.post(VueLocal, url, body, _params, callback)
                    }
                })
        });
    }

    query(VueLocal, params) {
        var loading_type = 'normal'
        if (params.loading_type != undefined) {
            loading_type = params.loading_type
        }
        var access_token = VueLocal.$cookie.get('user_token')
        var params = merge(params, this.options.params, {
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        })
        VueLocal.$store.commit('SET_LOADING_TYPE', loading_type)
        VueLocal.$store.commit('SET_LOADING', true)

        return new Promise((resolve, reject) => {
            axios
                .post(this.options.graphQLUrl, params.body, params)
                .then(response => {
                    resolve(response)

                    VueLocal.$store.commit('SET_LOADING', false)
                })
                .catch(error => {
                    VueLocal.$store.commit('ADD_HTTP_API_ERROR')
                    if (VueLocal.$store.state.http_api_error > 2) {
                        VueLocal.$store.commit('SET_LOADING', false)
                        VueLocal.$store.commit('SET_HTTP_API_ERROR', 0)
                        if (params.alert_on_error != false) {
                            VueLocal.$store.commit('ADD_ALERT', {
                                color: "error",
                                text: "Erreur pendant la connexion à l'API"
                            })
                        }

                        reject(error)
                    } else {
                        this.query(VueLocal, params).then(resolve).catch(reject)
                    }
                })
        })
    }
}
