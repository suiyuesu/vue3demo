<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-08-25 14:49:05
 * @LastEditors: sj
 * @LastEditTime: 2022-09-02 10:47:44
-->
<template>
  <div class="container" @mouseenter="show = true" @mouseleave="show = false">
    <div class="layout">
      <!-- <img :src="imgSrc" style="width: 40px" /> -->
      <ChatLineSquare style="width: 40px; height: 40px" />
      <div>我要咨询</div>
      <di :class="['phone', show ? '' : 'phoneW']"> 17366656508 </di>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
// import img1 from '@/static/icon/4woyaozixuna.png'
// import img2 from '@/static/icon/5woyaozixunb.png'
const show = ref(false)
// const imgSrc = ref(img1)

// watch(show, (v) => {
//   imgSrc.value = v ? img2 : img1
// })
</script>

<style lang="less" scoped>
.container {
  width: 80px;
  height: 80px;
  position: fixed;
  right: 50px;
  bottom: 50px;
  background-color: #fff;
  padding: 10px 0;
  z-index: 999;
  color: @themeColor;
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.075);
  border-radius: 13px;
  cursor: pointer;

  .layout {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
.phone {
  position: absolute;
  top: -10px;
  right: 70px;
  height: 80px;
  line-height: 80px;
  width: 150px;
  padding: 0 10px 0 25px;
  text-align: center;
  // display: none !important;
  overflow: hidden;
  transition: all 0.05s;
  border-radius: 40px 0 0 40px;
  background-color: @themeColor;
  color: #fff;
  font-size: 18px;
  z-index: 998;
}
.phoneW {
  width: 0;
  padding: 0;
  border: none;
  background-color: #fff;
  color: #fff;
}
.container:hover {
  color: #fff;
  background-color: @themeColor;
}
</style>