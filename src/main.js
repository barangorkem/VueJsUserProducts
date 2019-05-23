import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VeeValidate from 'vee-validate'
import {getToken} from './Auth.js'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VeeValidate)
const router=new VueRouter({
  routes:Routes,mode:'history'
})

router.beforeEach((to,from,next)=>{
  /* eslint-disable no-console */
  debugger
  if(to.meta.requiresAuth)
    {
      if(getToken())
        {
          next()
        }
      else
      {
        next({name:'usersLogin'})
      }
     
    }
  else
    {
      if(getToken())
        {
          next({name:'adduser'})
        }
      else
        {
          next();
        }
    }
    next()

  /* eslint-disable no-console */
})

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
