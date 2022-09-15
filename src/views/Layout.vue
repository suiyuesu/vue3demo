<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-05-28 15:11:07
 * @LastEditors: sj
 * @LastEditTime: 2022-09-02 16:55:39
-->
<template>
  <!-- 顶部 -->
  <AppTopnav />

  <!-- 吸顶头部 -->
  <AppHeaderSticky />

  <div class="app-main">
    <router-view />
  </div>
  <!-- 底部 -->
  <AppFooter />
  <!-- 联系我们 -->
  <AppPhone />
</template>

<script>
import { useStore } from 'vuex'
import AppTopnav from '@/components/app-topnav'
import AppFooter from '@/components/app-footer'
import AppPhone from '@/components/app-phone'
import AppHeaderSticky from '@/components/app-header-sticky.vue'

export default {
  name: 'Layout',
  components: {
    AppTopnav,
    AppFooter,
    AppPhone,
    AppHeaderSticky,
  },
  props: {},
  setup() {
    const store = useStore()
    const data = JSON.parse(localStorage.getItem('PC_STORE') || '{}')
    if (Object.keys(data).length) {
      store.commit('user/setActiveTab', data.user.activeTab)
    }
  },
}
</script>

<style lang="less" scoped>
.app-main {
  min-height: calc(100vh - 100px);
}

</style>