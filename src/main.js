import Vue from 'vue'
import App from './App.vue'

/*
* ----------------
* Importing styles
* ----------------
*/

import './assets/sass/app.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
