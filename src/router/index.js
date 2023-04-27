import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home'
// import Login from '../views/login'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('../views/home') },
    { path: '/login', component: () => import('../views/login') }

  ]
})

export default router
