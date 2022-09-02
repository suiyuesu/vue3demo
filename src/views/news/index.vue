<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-09-02 16:51:12
 * @LastEditors: sj
 * @LastEditTime: 2022-09-02 16:51:12
-->
<template>
  <div class="page-news">
    <div class="f5">
      <div class="layout">
        <Title :title="'新闻中心'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Title from '@/components/app-title.vue'
</script>

<style lang="less" scoped>
.f5 {
  background-color: @backColor;
}
.layout {
  .layout();
}
</style>