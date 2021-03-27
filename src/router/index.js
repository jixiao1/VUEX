import Vue from 'vue'

import Router from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/cate',
    name: 'cate',
    component: () => import('@/pages/Cate.vue')
  },
  {
    path: '/setting',
    name: 'settiung',
    component: () => import('@/pages/Settting.vue')
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
