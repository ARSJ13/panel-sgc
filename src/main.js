import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './axios'
import './bootstrap'
import './toasted'
import './assets/global.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
