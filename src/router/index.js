/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: leon0023@zoho.com.cn
 * @Date: 2022-05-28 14:42:20
 * @LastEditors: sj
 * @LastEditTime: 2022-06-12 09:37:51
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/', component: () => import('@/views/home/index')
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
