<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-12 10:51:05
 * @LastEditors: sj
 * @LastEditTime: 2022-08-25 17:43:33
-->
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">网站首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>产品体系</template>
      <el-menu-item index="2-1">智慧门诊SaaS</el-menu-item>
      <el-menu-item index="2-2">增值运营服务</el-menu-item>
      <el-menu-item index="2-3">数智卫监</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">服务案例</el-menu-item>
    <el-menu-item index="4">新闻咨询</el-menu-item>
    <el-menu-item index="5">关于麟康</el-menu-item>
  </el-menu>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const profile = computed(() => {
  // vuex的状态需要用计算属性，否则不是响应式
  return store.state.user.profile
})
</script>
<style scoped lang="less">
.el-menu-demo {
  width: 1240px;
  margin: 0 auto;
}
.flex-grow {
  flex-grow: 1;
}
</style>

