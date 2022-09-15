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
  <div class="card">
    <div class="border"></div>
    <div class="corners"></div>
    <div class="back">
      <span> {{ title }} </span>
    </div>
    <slot name="left"></slot>
  </div>
</template>

<script setup>
defineProps({
  name: '',
  title: '',
  width: '',
})
</script>

<style lang="less" scoped>
.card {
  position: relative;
  background: #0e225f !important;
  color: saddlebrown;
}

.border {
  position: absolute;
  left: 1px;
  right: 1px;
  top: 1px;
  bottom: 1px;
  border: 1px solid #eeeeee;
  opacity: 0.25;
  pointer-events: none;
}
.back {
  background-size: 100% 100%;
  z-index: 99;
  height: 74px;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 36px;
  justify-content: center;
  color: #d3f3ff;
}

.corners {
  position: absolute;
  pointer-events: none;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  // background: linear-gradient(to left, #66778e, #66778e) left top no-repeat,
  //   linear-gradient(to bottom, #66778e, #66778e) left top no-repeat,
  //   linear-gradient(to left, #66778e, #66778e) right top no-repeat,
  //   linear-gradient(to bottom, #66778e, #66778e) right top no-repeat,
  //   linear-gradient(to left, #66778e, #66778e) left bottom no-repeat,
  //   linear-gradient(to bottom, #66778e, #66778e) left bottom no-repeat,
  //   linear-gradient(to left, #66778e, #66778e) right bottom no-repeat,
  //   linear-gradient(to left, #66778e, #66778e) right bottom no-repeat;
  // background-size: 3px 60px, 360px 3px, 3px 60px, 360px 3px;
}
</style>
