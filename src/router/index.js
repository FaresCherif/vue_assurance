import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import DetailView from '../views/DetailView.vue';
import AddView from '@/views/AddView.vue';
import '@/assets/main.css';
import UpdateView from '@/views/UpdateView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',name:'home', component: HomeView},
    { path: '/detail/:contractnumber',name:'detail', component: DetailView},
    { path: '/add',name:'add', component: AddView},
    { path: '/update/:contractnumber',name:'update', component: UpdateView},

  ],
})

export default router
