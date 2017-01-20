import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App.vue'
import psjaBundle from './PSJA.js'

Vue.use(vueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
