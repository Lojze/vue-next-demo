import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/rem'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueAwesomeSwiper,
  render: h => h(App)
}).$mount('#app')
