import Vue from 'vue'
import App from './App.vue'
import randomNumberGenerator from './scripts/randomNumberGenerator.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

window.onload = () => {

  randomNumberGenerator();

  console.log('page is fully loaded');

};