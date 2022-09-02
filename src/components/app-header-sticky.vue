<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-25 10:23:45
 * @LastEditors: sj
 * @LastEditTime: 2022-09-02 16:44:36
-->
<template>
  <div class="app-header-sticky" :class="{ show: y >= 78 }">
    <div v-show="y >= 78" class="container">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
        router
      >
        <el-menu-item index="0" class="layout">
          <img src="../static/logo/logoH1.png" style="height: 45px" />
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="/"> 网站首页 </el-menu-item>
        <el-sub-menu index="product">
          <template #title> 产品体系 </template>
          <el-menu-item index="outpatient"> 智慧门诊SaaS </el-menu-item>
          <el-menu-item index="addValues"> 增值运营服务 </el-menu-item>
          <el-menu-item index="semi"> 数智卫监 </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="example"> 服务案例 </el-menu-item>
        <el-menu-item index="news"> 新闻咨询 </el-menu-item>
        <el-menu-item index="about"> 关于麟康 </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'
const store = useStore()
const { y } = useWindowScroll()
const activeIndex = computed(() => {
  // vuex的状态需要用计算属性，否则不是响应式
  return store.state.user.activeTab
})

const handleSelect = (key, keyPath) => {
  store.commit('user/setActiveTab', key)
}
</script>

<style scoped lang="less">
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  opacity: 0;
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(../assets/images/img1.jpg) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @themeColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @themeColor;
      }
    }
  }
}
.flex-grow {
  flex-grow: 1;
}
.el-menu-demo {
  margin-top: 15px !important;
  width: 1240px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: none;
  z-index: 999;
  height: 50px;
}
</style>