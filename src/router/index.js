import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
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
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (!to.path) {  // Safe check
    next('/');
  } else {
    next();
  }
});
export default router
