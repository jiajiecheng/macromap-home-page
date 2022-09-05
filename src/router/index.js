import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Join from '../views/Join.vue'
import  About from '../views/About.vue'
import DownLoad from '../views/DownLoad.vue'
import Cooperation from  '../views/Cooperation.vue'
import Information from  '../views/Information.vue'
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
    path: '/join',
    component: Join
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/dowload',
    component: DownLoad
  },
  {
    path: '/shop',
    component: Cooperation
  },
  {
    path: '/information',
    component: Information,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  routes
})
export default router
