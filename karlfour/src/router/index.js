import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Home from '../views/Shop.vue'
import Home from '../views/Contact.vue'
import Home from '../views/Basket.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/Shop.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/basket',
    name: 'basket',
    component: () => import('../views/Basket.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
