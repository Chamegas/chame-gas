import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index/Index.vue')
    },
    {
      path: '/',
      name: 'cartIndex',
      component: () => import('@/views/cart/Index.vue')
    }
  ]
})

export default router
