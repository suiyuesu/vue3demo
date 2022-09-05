<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-09-02 16:51:12
 * @LastEditors: linxi
 * @LastEditTime: 2022-09-05 10:20:43
-->
<template>
  <div class="page-news">
    <div class="f5">
      <div class="layout">
        <Title :title="'新闻中心'" />
        <el-row :gutter="70" justify="space-evenly">
          <el-col :span="2">
            <div class="time">
              <p>8/24</p>
            </div>
          </el-col>
          <el-col :span="22">
            <div class="server">
              <p>111</p>
            </div>
            <div class="server">
              <p>111</p>
            </div>
          </el-col>
        </el-row>
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
.time {
  height: 100%;
  display: flex;
  align-items: flex-end;
}
</style>