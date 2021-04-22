import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/vuex',
    component: () => import('@/views/vuex.vue')
  },
  {
    path: '/axios',
    component: () => import('@/views/axios.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
