import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import DetailView from '../views/DetailView.vue';
import '@/assets/main.css';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',name:'home', component: HomeView},
    { path: '/detail/:contractnumber',name:'detail', component: DetailView}

  ],
})

export default router
