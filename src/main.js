import Vue from 'vue'
import App from './App.vue'//根组件

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
})
