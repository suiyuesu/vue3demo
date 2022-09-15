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
    <ProgressBar style="height: 470px" />
    <div class="rightOne-subTitle">当前完成情况</div>
  </div>
</template>

<script setup>
import { onMounted, reactive, watch, ref } from 'vue'
import * as echarts from 'echarts'
import ProgressBar from './progressBar.vue'

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
  background: red;
  color: #fff;
  font-size: 32px;
  padding: 40px;
  &-title {
    text-align: center;
    p {
      line-height: 60px;
    }
  }
  &-subTitle {
    text-align: center;
    color: #fff;
    font-size: 32px;
  }
}
</style>
