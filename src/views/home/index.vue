<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-12 09:03:42
 * @LastEditors: sj
 * @LastEditTime: 2022-06-25 11:23:28
-->
<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播 -->
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from './components/home-category'
export default {
  name: 'PageHome',
  components: { HomeCategory }
}
</script>
<style scoped lang="less"></style>
