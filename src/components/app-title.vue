<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-08-26 16:16:57
 * @LastEditors: sj
 * @LastEditTime: 2022-09-01 13:49:55
-->
<template>
  <div class="titleContainer">
    <div class="title">{{ title }}</div>
    <div class="line"></div>
  </div>
</template>

<script setup>
defineProps({
  title: '',
})
</script>

<style lang="less" scoped>
.titleContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0 10px;
}
.title {
  font-size: 30px;
  color: @fontColor;
  text-align: center;
  padding-bottom: 20px;
}
.line {
  width: 50px;
  height: 2px;
  background-color: @xtxColor;
}
</style>