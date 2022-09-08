<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-08-26 16:16:57
 * @LastEditors: sj
 * @LastEditTime: 2022-09-02 10:33:40
-->
<template>
  <div class="lineListContainer">
    <ul class="content">
      <li class="content-line" v-for="(item, i) in list" :key="i">
        <span class="content-radio"></span>
        <p class="content-main">{{ item?.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  list: [],
})
</script>

<style lang="less" scoped>
.lineListContainer {
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 30px;
}
.content {
  color: #888888;
  font-size: 14px;
  text-align: center;
  padding: 0 15px 0 0;
  &-line {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0 0 10px;
  }
  &-radio {
    background: #32abe0;
    width: 8px;
    height: 8px;
    margin-right: 10px;
    border-radius: 50%;
  }
  &-main {
  }
}
</style>
