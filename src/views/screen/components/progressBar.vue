<!--
 * @Descripttion: 
 * @version: 
 * @Author: linxi
 * @email: 2194421430@qq.com
 * @Date: 2022-09-14 17:49:50
 * @LastEditors: linxi
 * @LastEditTime: 2022-09-15 10:21:38
-->
<template>
  <div class="rightOneCircle">
    <el-progress
      class="rightOneCircle-main"
      type="circle"
      :percentage="rightOneCircle?.value"
      :color="rightOneCircle?.colors"
      :width="70"
    >
      <template #default="{ percentage }" class="produce">
        <p class="produce-value">{{ percentage }}%</p>
        <p class="produce-label">Progressing</p>
      </template></el-progress
    >
  </div>
</template>

<script setup>
import { onMounted, reactive, watch, ref } from 'vue'
import * as echarts from 'echarts'

defineProps({
  data: [],
})

const rightOneCircle = reactive({
  value: 80,
  colors: '#2ce9fc',
})

// const percentage = ref(10)
// const percentage2 = ref(0)

// const colors = [
//   { color: '#f56c6c', percentage: 20 },
//   { color: '#e6a23c', percentage: 40 },
//   { color: '#5cb87a', percentage: 60 },
//   { color: '#1989fa', percentage: 80 },
// ]

// const increase = () => {
//   percentage.value += 10
//   if (percentage.value > 80) {
//     percentage.value = 80
//   }
// }
// const decrease = () => {
//   percentage.value -= 10
//   if (percentage.value < 0) {
//     percentage.value = 0
//   }
// }
// onMounted(() => {
//   setInterval(() => {
//     percentage2.value = (percentage2.value % 80) + 10
//   }, 500)
// })
</script>

<style lang="less" scoped>
.rightOneCircle /deep/ .el-progress {
  height: 470px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rightOneCircle /deep/ .el-progress-circle {
  width: 350px !important;
  height: 350px !important;
}
.rightOneCircle /deep/ .el-progress__text {
  font-size: 32px !important;
}
.produce {
  display: flex;
  flex-direction: column;
  &-value {
    font-size: 50px !important;
    color: #fff;
    margin-bottom: 10px;
  }
  &-label {
    font-size: 32px !important;
    color: #5b6c98;
  }
}
</style>
