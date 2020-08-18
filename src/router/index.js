import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import('views/home')
const cart = () => import('views/cart')
const profile = () => import('views/profile')
const category = () => import('views/category')

const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
