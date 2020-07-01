import Vue from 'vue'
import axios from 'axios' // eslint-disable-line
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
