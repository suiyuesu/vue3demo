<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-12 09:03:42
 * @LastEditors: sj
 * @LastEditTime: 2022-09-01 14:27:58
-->
<template>
  <div class="page-home">
    <div class="f5">
      <Title :title="'产品体系'" />
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="grid-content ep-bg-purple">sfdgs</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content ep-bg-purple">sfdgs</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content ep-bg-purple">sfdgs</div>
        </el-col>
      </el-row>
    </div>
    <div class="ff">546</div>
  </div>
</template>
<script setup>
import Title from '@/components/app-title.vue'
</script>
<style scoped lang="less">
.f5 {
  background-color: @backColor;
}
.ff {
  background-color: #fff;
}
</style>