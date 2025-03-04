import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Analyse from '../pages/Analyse.vue'
import Compability from '../pages/Compability.vue'
import Profile from '../pages/Profile.vue'
import Resume from '../pages/Resume.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/resume', component: Resume },
  { path: '/analyse', component: Analyse },
  { path: '/compability', component: Compability },
  { path: '/profile', component: Profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
