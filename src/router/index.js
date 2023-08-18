import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import process from 'process';

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('../views/Home.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/login/index.vue')
      },
      {
        path: '404',
        name: 'NotFound',
        component: () => import('@/views/404.vue')
      },
      {
        path: 'personal',
        name: 'Personal',
        meta: {
          requireAuth: true,
        },
        component: () => import('@/views/personal/index.vue'),
        children: [
          {
            path: 'message',
            name: 'PersonalMessage',
            meta: {
              component: () => import('@/views/personal/message.vue')
            }
          }
        ]
      },
      {
        path: 'app',
        name: 'App',
        meta: {
          requireAuth: true,
        },
        component: () => import('@/views/app/index.vue'),
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  }
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router