import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VeeValidate from 'vee-validate'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VeeValidate)
const router=new VueRouter({
  routes:Routes,mode:'history'
})

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
