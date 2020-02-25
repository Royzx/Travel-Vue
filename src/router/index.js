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
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
