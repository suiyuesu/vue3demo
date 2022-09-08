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
  <div class="subTitleContainer">
    <div class="pic"><img :src="pic" /></div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: '',
  pic: '',
})
</script>

<style lang="less" scoped>
.subTitleContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 10px;
  padding: 0 0 20px;
}
.title {
  font-size: 18px;
  color: #32abe0;
  text-align: center;
}
.pic {
  width: 30px;
  height: 30px;
  margin: 0 5px 0 0;
}
</style>
