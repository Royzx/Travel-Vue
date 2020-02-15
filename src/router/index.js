import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/page/home/Home'
import Home from '../pages/home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  // , {
  //   path: '/list',
  //   name: 'List',
  //   component: () => import('../pages/list/List')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
