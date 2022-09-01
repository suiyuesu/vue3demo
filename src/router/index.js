/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: leon0023@zoho.com.cn
 * @Date: 2022-05-28 14:42:20
 * @LastEditors: sj
 * @LastEditTime: 2022-09-01 13:57:06
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
      // { path: '/category/:id', component: () => import('@/views/category') },
      // { path: '/category/sub/:id', component: () => import('@/views/category/sub') }
    ]
  }
]

const router = createRouter({
  // hash模式
  history: createWebHashHistory(),
  routes
})

export default router
