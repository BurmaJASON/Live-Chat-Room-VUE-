import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/Welcome.vue'
import ChatView from '../views/ChatView.vue'
import { auth } from '@/firebase/config'
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
    beforeEnter (to,from , next ) {
      let user = auth.currentUser;
      if(user) {
        next();
      }else {
        next({name : 'welcome'});
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
