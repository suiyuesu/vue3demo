/*
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-05-28 14:42:20
 * @LastEditors: sj
 * @LastEditTime: 2022-06-25 14:39:12
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/common.less'
import ui from './components/library'// 骨架屏

// createApp(App).use(store).use(router).mount('#app')
createApp(App).use(store).use(router).use(ui).mount('#app')
