import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WriteAPostView from '../views/WriteAPostView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/write-post',
      name: 'write',
      component: WriteAPostView
    },
    {
      path: '/view-post',
      name: 'read',
      component: () => import('../views/SinglePostView.vue')
    }
  ]
})

export default router
