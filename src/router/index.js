import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '@/layouts/MainLayout'
import HeaderLayout from '@/layouts/HeaderLayout'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: MainLayout,
      children: [
        {
          path: '',
          component: () => import('@/pages/LoginPage'),
        },
      ],
    },
    {
      path: '/home',
      name: 'main',
      component: MainLayout,
      children: [
        {
          path: '',
          component: () => import('@/pages/MainPage'),
        },
      ],
    },
    {
      path: '/recoveryAccess',
      name: 'recoveryAccess',
      component: MainLayout,
      children: [
        {
          path: '',
          component: () => import('@/pages/AccessRecoveryPage'),
        },
      ],
    },
    {
      path: '/browseProjects',
      name: 'browseProjects',
      component: MainLayout,
      children: [
        {
          path: '',
          component: () => import('@/pages/BrowseProjectsPage'),
        },
      ],
    },
    {
      path: '/allBoards',
      name: 'allBoards',
      component: MainLayout,
      children: [
        {
          path: '',
          component: () => import('@/pages/AllBoardsPage'),
        },
      ],
    },
    {
      path: '/board',
      name: 'board',
      component: HeaderLayout,
      props: true,
      children: [
        {
          path: '/board/:id',
          name: 'boardID',
          component: () => import('@/pages/BoardPage'),
          props: true,
        },
        {
          path: '/tasks',
          name: 'tasks',
          component: () => import('@/pages/TasksPage'),
        },
      ],
    },
    {
      path: '/issue',
      name: 'issue',
      component: HeaderLayout,
      children: [
        {
          path: '/issue/:id',
          name: 'issueID',
          component: () => import('@/pages/IssuePage'),
          props: true,
        },
      ],
    },
  ],
})
