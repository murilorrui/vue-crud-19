import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/home.vue';
import About from '@/views/user/about/about.vue';
import User from '@/views/user/user.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '<strong>Olá José.</strong><span class="ml-2">Bem vindo ao seu painel</span>',
      icon: 'fa-home',
    },
  },
  {
    path: '/users',
    name: 'about',
    component: About,
    meta: {
      title: 'Usuários',
      icon: 'fa-user',
    },
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    meta: {
      title: 'Edição de usuários',
      icon: 'fa-user',
      backRoute: 'about',
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
