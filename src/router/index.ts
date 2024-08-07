import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Tasks from '../views/Tasks.vue';
import Airdrop from '../views/Airdrop.vue';
import Academy from '../views/Academy.vue';
import Farm from '../views/Farm.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks,
  },
  {
    path: '/airdrop',
    name: 'airdrop',
    component: Airdrop,
  },
  {
    path: '/academy',
    name: 'academy',
    component: Academy,
  },
  {
    path: '/farm',
    name: 'farm',
    component: Farm,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
