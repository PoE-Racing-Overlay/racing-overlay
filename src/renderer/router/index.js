import { createRouter, createMemoryHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
