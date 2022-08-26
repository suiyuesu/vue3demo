<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-12 09:03:42
 * @LastEditors: sj
 * @LastEditTime: 2022-08-26 16:23:49
-->
<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播 -->
        <HomeBanner />
      </div>
    </div>
  </div>
</template>
<script setup>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
</script>
<style scoped lang="less"></style>