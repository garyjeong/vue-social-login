import Vue from 'vue'
import App from './App.vue'
import GAuth from 'vue-google-oauth2'


Vue.config.productionTip = false
Vue.use(GAuth, {
  clientId: '715904775794-7md4m9na3gv0po48buqr9iahfuftntua.apps.googleusercontent.com', 
  scope: 'email', 
  prompt: 'consent', 
  fetch_basic_profile: false
})

new Vue({
  render: h => h(App),
}).$mount('#app')
