import { createRouter, createWebHistory } from 'vue-router';
import LandingScreen from '../views/LandingScreen.vue';
import SearchResults from '../views/SearchResults.vue';
import Test from '@/components/test.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingScreen,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
  {
    path: '/search',
    name: 'SearchResults',
    component: SearchResults,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
