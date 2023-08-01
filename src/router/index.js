import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView,
      meta: {transition: 'slide-right'}
    },
    {
      path: '/violatingPilots',
      name: 'violatingPilots',
      component: () => import('../views/ViolatingPilots.vue'),
      meta: {transition: 'slide-left'}
    },
    {
      path: '/currentDrones',
      name: 'currentDrones',
      component: () => import('../views/CurrentDrones.vue'),
      meta: {transition: 'slide-left'}
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test.vue'),
      meta: {transition: 'slide-left'}
    }
  ]
})

export default router
