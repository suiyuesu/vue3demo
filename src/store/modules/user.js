/*
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-11 09:44:24
 * @LastEditors: sj
 * @LastEditTime: 2022-08-26 16:07:50
 */
// 用户模块
export default {
  namespaced: true,
  state () {
    return {
      // 用户信息
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      },
      activeTab: 1

    }
  },
  mutations: {
    // 修改用户信息，payload就是用户信息对象
    setUser (state, payload) {
      state.profile = payload
    },
    setActiveTab (state, payload) {
      console.log(payload);
      state.activeTab = payload
    }
  }
}
