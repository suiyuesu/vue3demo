<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-09-16 09:35:14
 * @LastEditors: sj
 * @LastEditTime: 2022-09-16 10:38:04
-->
<template>
  <!-- <div class="container"> -->
  <el-row :gutter="30">
    <el-col v-for="(item, i) in list" :key="i" :span="8">
      <div class="plan">
        <header>{{ item.name }}</header>
        <span>适用于</span>
        <section>{{ item.target }}</section>
        <div class="plan-price">{{ item.price }}</div>
      </div>
    </el-col>
  </el-row>
  <!-- </div> -->
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  list: {
    type: Array,
    default: [],
  },
})
</script>

<style lang="less" scoped>
// .container {
//   padding: 0 140px;
// }
.plan {
  .flexCenter();
  flex-direction: column;
  width: 245px;
  height: 220px;
  background-color: @themeColor;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  header {
    font-size: 16px;
    width: 120px;
    text-align: center;
    border-bottom: 5px solid #fff;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  &-price {
    color: @themeColor;
    padding: 8px 35px;
    border-radius: 5px;
    background-color: #fff;
    margin-top: 15px;
  }
}
</style>
