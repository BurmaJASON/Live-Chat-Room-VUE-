import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/Welcome.vue'
import ChatView from '../views/ChatView.vue'
const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path : '/chatroom',
    name : 'ChatView',
    component : ChatView,
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
