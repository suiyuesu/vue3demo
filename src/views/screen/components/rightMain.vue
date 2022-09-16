<!--
 * @Descripttion: 
 * @version: 
 * @Author: linxi
 * @email: 2194421430@qq.com
 * @Date: 2022-09-15 09:21:27
 * @LastEditors: linxi
 * @LastEditTime: 2022-09-16 09:16:05
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: linxi
 * @email: 2194421430@qq.com
 * @Date: 2022-09-14 17:49:50
 * @LastEditors: linxi
 * @LastEditTime: 2022-09-15 09:19:50
-->
<template>
  <div id="rightMain">
    <RightOne style="width: 920px; height: 710px" />
    <RightTwo style="width: 920px; height: 710px" />
    <RightThree style="width: 920px; height: 436px" />
  </div>
</template>

<script setup>
import { onMounted, reactive, watch, ref } from 'vue'
import * as echarts from 'echarts'
import RightOne from './rightOne.vue'
import RightTwo from './rightTwo.vue'
import RightThree from './rightThree.vue'
defineProps({
  data: [],
})
</script>

<style lang="less" scoped></style>