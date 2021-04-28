import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/fav',
    name: 'Favourites',
    component: () => import(/* webpackChunkName: "favourites" */ '../views/Favourites.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
