import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ResumeBuilder from '../pages/ResumeBuilder.vue';
import ProfilePage from '../pages/ProfilePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/resume-builder', component: ResumeBuilder },
  { path: '/profile', component: ProfilePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
