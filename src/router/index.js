import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/Welcome.vue'
const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
