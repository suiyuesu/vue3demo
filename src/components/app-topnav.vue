<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-12 10:51:05
 * @LastEditors: sj
 * @LastEditTime: 2022-09-02 16:54:51
-->
<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      router
    >
      <el-menu-item index="0" class="layout">
        <img src="../static/logo/logo.png" style="height: 45px" />
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
    <div style="height: 700px">
      <XtxCarousel auto-play :sliders="bannerList.banner" />
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed, ref, reactive, watch } from 'vue'
import home1 from '@/static/imgs/homeBanner1.jpg'
import home2 from '@/static/imgs/homeBanner2.jpg'
import product from '@/static/imgs/productBannerk.jpg'
import server from '@/static/imgs/serverBannerk.jpg'
import news from '@/static/imgs/newBanner.jpg'
import about from '@/static/imgs/aboutBanner.jpg'
const store = useStore()
const profile = computed(() => {
  // vuex的状态需要用计算属性，否则不是响应式
  return store.state.user.profile
})

const activeIndex = computed(() => {
  // vuex的状态需要用计算属性，否则不是响应式
  return store.state.user.activeTab
})
const bannerList = reactive({
  banner: [{ imgUrl: home1 }, { imgUrl: home2 }],
})
watch(activeIndex, (key) => {
  let data = []
  if (key == '/') {
    data = [{ imgUrl: home1 }, { imgUrl: home2 }]
  } else if (key == 'example') {
    data = [{ imgUrl: server }]
  } else if (key == 'news') {
    data = [{ imgUrl: news }]
  } else if (key == 'about') {
    data = [{ imgUrl: about }]
  } else {
    data = [{ imgUrl: product }]
  }
  bannerList.banner = data
})

const handleSelect = (key, keyPath) => {
  store.commit('user/setActiveTab', key)
}
</script>
<style scoped lang="less">
.header {
  position: relative;
  width: 100%;
  ::v-deep .el-menu--horizontal > .el-menu-item,
  ::v-deep .el-menu--horizontal > .el-sub-menu .el-sub-menu__title,
  ::v-deep .el-menu--horizontal > .el-menu-item.is-active {
    color: #fff;
  }
  ::v-deep .el-menu--horizontal > .el-menu-item.is-active {
    background-color: rgba(0, 0, 0, 0) !important;
    color: #fff !important;
    border-color: #fff;
  }
  ::v-deep .el-menu--horizontal > .el-sub-menu .el-sub-menu__title:hover,
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background-color: rgba(0, 0, 0, 0) !important;
  }
}
.el-menu-demo {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 1240px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: none;
  z-index: 999;
  height: 50px;
}

.flex-grow {
  flex-grow: 1;
}
.layout {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
</style>