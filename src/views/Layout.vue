<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-05-28 15:11:07
 * @LastEditors: sj
 * @LastEditTime: 2022-06-12 10:52:38
-->
<template>
  <!-- 顶部 -->
  <AppTopnav />

  <!-- 头部 -->
  <header>头部</header>
  <div class="main">
    <router-view />
  </div>
  <!-- 底部 -->
  <footer>底部</footer>
</template>

<script >
import { useStore } from 'vuex'
import AppTopnav from '@/components/app-topnav'

export default {
  name: 'Layout',
  components: { AppTopnav },
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

</style>
