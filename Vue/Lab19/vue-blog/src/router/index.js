import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WriteAPostView from '../views/WriteAPostView.vue'
import SinglePostView from '../views/SinglePostView.vue'

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
      path: '/view-post/:id',
      name: 'read',
      component: SinglePostView
    }
  ]
})

export default router
