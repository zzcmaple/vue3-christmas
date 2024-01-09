import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/christmas',
    name: 'Christmas',
    component: () => import('@/views/Christmas.vue')
  },
]
const router: Router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 })
});


export default router;