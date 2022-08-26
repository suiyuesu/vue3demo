<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-08-26 16:16:57
 * @LastEditors: sj
 * @LastEditTime: 2022-08-26 16:48:42
-->
<template>
  <div class="title">{{ title }}</div>
  <span></span>
</template>

<script setup>
defineProps({
  title: '',
})
</script>

<style lang="less" scoped>
.title {
  font-size: 30px;
  color: @fontColor;
  text-align: center;
}
</style>
