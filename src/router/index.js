/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: leon0023@zoho.com.cn
 * @Date: 2022-05-28 14:42:20
 * @LastEditors: sj
 * @LastEditTime: 2022-09-02 16:54:13
 */
import { createRouter, createWebHashHistory, beforeRouteUpdate } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/', component: () => import('@/views/home/index')
      },
      {
        path: '/example', component: () => import('@/views/example/index')
      },
      {
        path: 'news', component: () => import('@/views/news/index')

      },
      {
        path: '/about', component: () => import('@/views/about/index')
      },
      {
        path: '/outpatient', component: () => import('@/views/product/outpatient')
      },
      {
        path: '/addValues', component: () => import('@/views/product/addValues')
      },
      {
        path: '/semi', component: () => import('@/views/product/semi')
      },
    ]
  }
]

const router = createRouter({
  // hash模式
  history: createWebHashHistory(),
  routes
})

export default router
