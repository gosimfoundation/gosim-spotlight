import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: () => import('../views/IndexView.vue')
    // },
    {
      path: '/',
      name: 'index',
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
      path: '/rust2025',
      name: 'rust2025',
      component: () => import('../views/rust2025/HomeView.vue')
    },
    {
      path: '/rust2025/judging',
      name: 'rust2025judging',
      component: () => import('../views/rust2025/JudgingView.vue')
    },
    {
      path: '/rust2025/rules',
      name: 'rust2025rules',
      component: () => import('../views/rust2025/RulesView.vue')
    },
    {
      path: '/ai2025',
      name: 'ai2025',
      component: () => import('../views/ai2025/HomeView.vue')
    },
    {
      path: '/ai2025/judging',
      name: 'ai2025judging',
      component: () => import('../views/ai2025/JudgingView.vue')
    },
    {
      path: '/ai2025/rules',
      name: 'ai2025rules',
      component: () => import('../views/ai2025/RulesView.vue')
    },
    // {
    //   path: '/details',
    //   name: 'details',
    //   component: () => import('../views/DetailsView.vue')
    // },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      beforeEnter: (to, from, next) => {
        console.log('No page found for path:', to.path);
        next('/');
      }
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

// router.beforeEach((to, from, next) => {
//   if (!to.path) {  // Safe check
//     next('/');
//   } else {
//     next();
//   }
// });

export default router
