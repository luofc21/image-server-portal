import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
    // {
    //   path: '/404',
    //   component: () => import('@/views/404.vue'),
    //   meta: { hidden: true }
    // },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      meta: { title: '首页' },
    },
    {
        path: '/album/detail',
        name: 'AlbumDetail',
        component:() => import('@/views/AlbumDetail.vue'),
        meta: { title: '相册详情' },
    }
  ]
  
  const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
    routes: routes
  })
  
  export default router