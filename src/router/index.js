/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: leon0023@zoho.com.cn
 * @Date: 2022-05-28 14:42:20
 * @LastEditors: sj
 * @LastEditTime: 2022-09-02 15:43:16
 */
import { createRouter, createWebHashHistory } from 'vue-router'

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
      }
    ]
  }
]

const router = createRouter({
  // hash模式
  history: createWebHashHistory(),
  routes
})

export default router
