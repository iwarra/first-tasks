import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import SingleProductView from '../views/SingleProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/products/:number',
    name: 'paginatedProducts',
    component: ProductsView
    
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  } ,
  {
    path: '/product/:sku', 
    name: 'product',
    component: SingleProductView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
