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
  <div class="titleContainer">
    <div class="title">{{ title }}</div>
    <div class="icon"><i class="iconfont icona-16Cjishishizhong" /></div>
    <div class="time">
      {{
        newsDetailId == 14 || newsDetailId == 15
          ? '2014-12-07'
          : moment(time).format(DateTimeFormatSimpleOnly)
      }}
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'
import { DateTimeFormatSimpleOnly } from '@/api/datatime.js'
defineProps({
  title: '',
  time: '',
  newsDetailId: '',
})
</script>

<style lang="less" scoped>
.titleContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}
.title {
  font-size: 30px;
  color: @fontColor;
  text-align: center;
  padding-bottom: 20px;
}
.time {
  color: #666666;
}
.icon /deep/ .iconfont {
  color: #666666 !important;
  font-size: 20px !important;
}
</style>