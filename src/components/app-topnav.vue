<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-12 10:51:05
 * @LastEditors: sj
 * @LastEditTime: 2022-09-01 13:41:44
-->
<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0" class="layout">
        <img src="../static/logo/logo.png" style="height: 45px" />
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1"> 网站首页 </el-menu-item>
      <el-sub-menu index="2">
        <template #title> 产品体系 </template>
        <el-menu-item index="2-1"> 智慧门诊SaaS </el-menu-item>
        <el-menu-item index="2-2"> 增值运营服务 </el-menu-item>
        <el-menu-item index="2-3"> 数智卫监 </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3"> 服务案例 </el-menu-item>
      <el-menu-item index="4"> 新闻咨询 </el-menu-item>
      <el-menu-item index="5"> 关于麟康 </el-menu-item>
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
  console.log(key)
  let data = []
  if (key == 1) {
    data = [{ imgUrl: home1 }, { imgUrl: home2 }]
  } else if (key == 3) {
    data = [{ imgUrl: server }]
  } else if (key == 4) {
    data = [{ imgUrl: news }]
  } else if (key == 5) {
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