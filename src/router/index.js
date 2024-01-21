import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import TheDO from '../pages/TheDO.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/the-do',
      name: 'The DO',
      component: () => import('../pages/TheDO.vue'),
      //component: TheDO,
    },
  ],
});

export default router;
