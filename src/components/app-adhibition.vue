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
  <div class="adhibitionContainer">
    <ul class="content">
      <li class="content-line" v-for="(item, i) in list" :key="i">
        <div class="content-serverList">
          <img class="content-img" :src="item.img" />
          <header class="content-header">{{ item?.title }}</header>
          <p class="content-main">{{ item?.subTitle }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  list: [],
})
</script>

<style lang="less" scoped>
.adhibitionContainer {
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 30px;
}
.content {
  color: #888888;
  font-size: 14px;
  text-align: center;
  padding: 0 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  &-line {
    .boxShadow();
    margin: 28px 0;
  }
  &-serverList {
    .hoverShadowServer();
    width: 288px;
    height: 224px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(0, 0, 0, 0);
  }
  &-img {
    width: 35px;
    height: 35px;
  }
  &-header {
    margin: 8px 0;
  }
  &-main {
    margin: 0 0 10px;
  }
}
</style>
