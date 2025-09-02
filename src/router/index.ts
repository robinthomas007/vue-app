import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../pages/ProductList.vue'
import Cart from '../pages/CartPage.vue'

const routes = [
  { path: '/', component: ProductList },
  { path: '/cart', component: Cart },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
