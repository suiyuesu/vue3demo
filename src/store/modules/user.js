/*
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-11 09:44:24
 * @LastEditors: sj
 * @LastEditTime: 2022-09-01 14:02:26
 */
// 用户模块
export default {
  namespaced: true,
  state () {
    return {
      activeTab: 1
    }
  },
  mutations: {
    setActiveTab (state, payload) {
      console.log(payload);
      state.activeTab = payload
    }
  }
}
