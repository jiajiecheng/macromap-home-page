import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Introduction from '../views/Introduction.vue'
import Join from '../views/Join.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home' 
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/product',
    component: Introduction
  },
  {
    path: '/join',
    component: Join
  }
]

const router = new VueRouter({
  routes
})

export default router
