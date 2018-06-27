import axios from 'axios'
const merge = require('webpack-merge')
export default class requestContainer {
    constructor(Vue, options) {
        this.Vue = Vue
        this.options = options
    }

    // get(VueLocal, url, params = {}) {
    //     var headers = {}
    //     var params = merge(params, this.options.params, {
    //         headers: headers
    //     })
    //     return new Promise((resolve, reject) => {
    //         VueLocal.$store.commit('SET_LOADING', true)
    //         if (params.with_auth == true) {
    //             var access_token = JSON.parse(VueLocal.$cookie.get('access-token'))
    //             if (access_token != null) {
    //                 headers = {
    //                     'Authorization': 'Bearer ' + access_token.token
    //                 }
    //             }else{
    //                 console.log('No auh present on this request')
    //                 reject({})
    //             }
    //         }
    //         params = merge(params, {
    //             headers: headers
    //         })
    //         axios.get(this.options.rootUrl + url, params)
    //             .then((response) => {
    //                 console.log(params)
    //                 if (params.loading_persit == false || params.loading_persit == undefined) {
    //                     VueLocal.$store.commit('SET_LOADING', false)
    //                 }
    //                 resolve(response)
    //             })
    //             .catch((error) => {
    //                 // console.log(VueLocal.$store.state.http_api_error)
    //                 //add 1 error
    //                 VueLocal.$store.commit('ADD_HTTP_API_ERROR')
    //                 if (VueLocal.$store.state.http_api_error > 3) {
    //                     VueLocal.$store.commit('SET_LOADING', false)
    //                     VueLocal.$store.commit('SET_HTTP_API_ERROR', 0)
    //                     if (params.alert_on_error != false) {
    //                         VueLocal.$store.commit('ADD_ALERT', {
    //                             type: "error",
    //                             text: "Erreur pendant la connexion à l'API"
    //                         })
    //                     }
    //
    //                     reject(error)
    //                 } else {
    //                     this.get(VueLocal, url, params).then(resolve).catch(reject)
    //                 }
    //             })
    //     });
    //
    // }
    //
    // post(VueLocal, url, body, params, callback) {
    //     VueLocal.$store.commit('SET_LOADING', true)
    //     if (params.with_auth == true) {
    //         var access_token = JSON.parse(VueLocal.$cookie.get('access-token'))
    //         var headers = {
    //             'Authorization': 'Bearer ' + access_token.token
    //         }
    //     } else {
    //         var headers = {}
    //     }
    //     var params = merge(params, this.options.params, {
    //         headers: headers
    //     })
    //     return axios.post(this.options.rootUrl + url, body, params)
    //         .then(response => {
    //             callback(response)
    //             if (params.loading_persit == false || params.loading_persit == undefined) {
    //                 VueLocal.$store.commit('SET_LOADING', false)
    //             }
    //         })
    //         .catch(error => {
    //             //add 1 error
    //             VueLocal.$store.commit('ADD_HTTP_API_ERROR', 1)
    //             if (VueLocal.$store.state.http_api_error > 3) {
    //                 VueLocal.$store.commit('SET_LOADING', false)
    //                 VueLocal.$store.commit('ADD_ALERT', {
    //                     type: "error",
    //                     text: "Erreur pendant la connexion à l'API"
    //                 })
    //             } else {
    //                 this.post(VueLocal, url, body, params, callback)
    //             }
    //         })
    // }

    query(VueLocal, params) {
        var loading_type = 'normal'
        if (params.loading_type != undefined) {
            loading_type = params.loading_type
        }
        var access_token = JSON.parse(VueLocal.$cookie.get('access-token'))
        var params = merge(params, this.options.params, {
            // headers: {
            //     'Authorization': 'Bearer ' + access_token.token
            // }
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
                  console.log("hello");
                    VueLocal.$store.commit('ADD_HTTP_API_ERROR')
                    if (VueLocal.$store.state.http_api_error > 3) {
                        VueLocal.$store.commit('SET_LOADING', false)
                        VueLocal.$store.commit('SET_HTTP_API_ERROR', 0)
                        if (params.alert_on_error != false) {
                            VueLocal.$store.commit('ADD_ALERT', {
                                type: "error",
                                title: "Erreur pendant la connexion à l'API",
                                description: "Erreur réseau: l'application n'a pas réussi à contacter l'API via le réseau."
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
