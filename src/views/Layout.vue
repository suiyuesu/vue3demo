<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-05-28 15:11:07
 * @LastEditors: sj
 * @LastEditTime: 2022-08-26 14:42:28
-->
<template>
  <!-- 顶部 -->
  <AppTopnav />

  <!-- 吸顶头部 -->
  <AppHeaderSticky />

  <!-- 头部 -->
  <AppHeader />

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
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppPhone from '@/components/app-phone'
import AppHeaderSticky from '@/components/app-header-sticky.vue'

export default {
  name: 'Layout',
  components: { AppTopnav, AppHeader, AppFooter, AppPhone, AppHeaderSticky },
  props: {},
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
  },
}
</script>

<style lang="less" scoped>
.app-main {
  min-height: calc(100vh - 100px);
}
</style>