import { createApp } from 'vue'
import './plugin'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/normalize.css'

createApp(App).use(router).use(store).use().mount('#app')
