<!--
 * @Descripttion: 
 * @version: 
 * @Author: linxi
 * @email: 2194421430@qq.com
 * @Date: 2022-09-14 16:55:37
 * @LastEditors: linxi
 * @LastEditTime: 2022-09-15 10:24:56
-->
<template>
  <div class="rightThree">
    <p class="rightThree-title">已拓展增值服务</p>
    <el-row class="rightThree-main">
      <div
        class="rightThree-content"
        v-for="(item, i) in rightThreeList.list"
        :key="i"
      >
        <p>{{ item.img }}</p>
        <p>{{ item.title }}</p>
      </div>
    </el-row>
  </div>
</template>

<script setup>
import { onMounted, reactive, watch, ref } from 'vue'
import * as echarts from 'echarts'

defineProps({
  data: [],
})

const rightThreeList = reactive({
  list: [
    {
      id: 1,
      title: 1111,
      img: '1111',
    },
    {
      id: 2,
      title: 2222,
      img: '22222',
    },
    {
      id: 3,
      title: 333,
      img: '33333',
    },
  ],
})
</script>

<style lang="less" scoped>
.rightThree {
  color: #fff;
  font-size: 32px;
  &-title {
    text-align: center;
    padding: 50px;
  }
  &-main {
  }
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px;
    width: 200px;
    height: 200px;
    p {
      height: 150px;
      line-height: 150px;
    }
  }
}
</style>
