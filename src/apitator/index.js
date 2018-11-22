import requestContainer from './requestContainer'
export default {
    options: {},
    install (Vue, options) {
        this.options = options;

        Vue.prototype.$apitator = new requestContainer(Vue, options)
    },
}
