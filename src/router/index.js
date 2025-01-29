import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/judging',
      name: 'judging',
      component: () => import('../views/JudgingView.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('../views/RulesView.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/DetailsView.vue')
    }
  ],
})

export default router
