import Vue from 'vue'
import App from './App.vue'
Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase()
})
// nao é uma boa prática
Vue.mixin({
    created() {
        console.log('Global Mixin Created')
    }
}) 
new Vue({
    el: '#app',
    render: h => h(App)
})
