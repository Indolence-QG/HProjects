import { createRouter, createWebHistory } from 'vue-router'
import test from '../components/test.vue'
import index from '../views/index.vue'
import login from '../views/login.vue'
const routes = [
  {
    path: '/',
    name: 'test',
    component: test
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
