import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(Vuelidate)

//In case of targeting one baseURL wich has the general configuration 
axios.defaults.baseURL = 'https://testpro-26e7f.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'put-token-here'
axios.defaults.headers.get['accepts'] = 'application/json'

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
