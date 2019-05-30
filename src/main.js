import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VeeValidate from 'vee-validate'
import {getToken,isAuthRoles} from './Auth.js'
import axios from 'axios'
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
        if(to.meta.urlRoles!=null)
            {
              if(isAuthRoles(to.meta.urlRoles))
                {
                  next()
                }
              else
                {
                  next({name:'404'})
                }
            }
          else
            {
              next();
            }
          
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
axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${ token }`;
    }

    return config;
  }, 

  (error) => {
    return Promise.reject(error);
  }
);
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
