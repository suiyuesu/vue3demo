<!--
 * @Descripttion: 
 * @version: 
 * @Author: linxi
 * @email: 2194421430@qq.com
 * @Date: 2022-09-14 16:55:37
 * @LastEditors: linxi
 * @LastEditTime: 2022-09-15 10:20:05
-->
<template>
  <div class="rightOne">
    <div class="rightOne-title">
      <p>年度目标</p>
      <p>医疗机构签约量：111</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, watch, ref } from 'vue'
import * as echarts from 'echarts'

defineProps({
  data: [],
})
const xData = ['杭州市', '衢州市', '丽水市', '宁波市']

const List = ['#74bac2']

const rightOneList = reactive({
  list: [
    {
      id: 1,
      number: 103,
    },
  ],
})
</script>

<style lang="less" scoped>
.rightOne {
  color: #fff;
  font-size: 32px;
  &-title {
    text-align: center;
    p {
      line-height: 60px;
    }
  }
}
</style>
