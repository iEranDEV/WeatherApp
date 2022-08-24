import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'SearchPage',
    component: () => import('./SearchPage.vue')
  },
  {
    path: '/pogoda',
    name: 'MainPage',
    component: () => import('./MainPage.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router;