/*
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-05-28 14:42:20
 * @LastEditors: sj
 * @LastEditTime: 2022-09-01 14:03:00
 */
import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

import user from './modules/user'

export default createStore({
  modules: {
    user,
  },
  plugins: [
    // 持久化插件
    createPersistedstate({
      key: 'PC_STORE',
      paths: ['user']
    })
  ]
})
