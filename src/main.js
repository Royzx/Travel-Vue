import Vue from 'vue'
import App from './App.vue'
import router from './router'
// click 300ms延迟问题
import fastClick from 'fastclick'
import './assets/styles/reset.css'
// 手机像素边框问题
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
