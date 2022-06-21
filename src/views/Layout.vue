<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-05-28 15:11:07
 * @LastEditors: sj
 * @LastEditTime: 2022-06-21 20:15:28
-->
<template>
  <!-- 顶部 -->
  <AppTopnav />

  <!-- 头部 -->
  <AppHeader />

  <div class="app-main">
    <router-view />
  </div>
  <!-- 底部 -->
  <AppFooter />
</template>

<script >
import { useStore } from 'vuex'
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

export default {
  name: 'Layout',
  components: { AppTopnav, AppHeader, AppFooter },
  props: {},
  setup() {
    const store = useStore()
    return {
      store
    }
  }
}
</script>

<style lang="less" scoped>
.app-main{
  min-height: calc(100vh - 100px);
}
</style>
