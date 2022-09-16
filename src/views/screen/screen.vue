<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-09-02 16:51:12
 * @LastEditors: linxi
 * @LastEditTime: 2022-09-16 13:40:30
-->
<template>
  <div class="page-screen">
    <div class="head">
      <div class="head-left">
        <el-row class="head-leftTitle">
          <el-col :span="8">智慧门诊his</el-col>
          <el-col :span="8">数智卫监</el-col>
          <el-col :span="8">增值服务</el-col>
        </el-row>
      </div>
      <div class="head-title" @click="isFullscreen">
        <p>麟康医疗业务数据统计</p>
      </div>
      <div class="head-right">
        <div class="head-rightTitle">
          <div>麟康医疗</div>
          <span></span>
          <div>
            <p>基层医疗一体化</p>
            <p>解决方案服务商</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-left">
        <DataCard
          :type="1"
          :title="'区域分布'"
          style="height: 945px; margin-bottom: 40px"
        >
          <template #left>
            <HistogramCharts style="width: 920px; height: 830px"
          /></template>
        </DataCard>
        <DataCard :title="'最新签约'" :type="1" style="height: 945px">
          <template #left>
            <DataTable style="width: 920px" />
          </template>
        </DataCard>
      </div>
      <div class="content-center">
        <div class="content-centerTop">
          <div class="content-centerTopTitle">截止今日服务机构数</div>
          <el-row class="content-centerTopfigure">
            <div
              class="content-centerTopfigureBack"
              v-for="(item, i) in screenList.figureList"
              :key="i"
            >
              {{ item.figure }}
            </div>
          </el-row>
          <el-row class="content-centerTopMain">
            <div
              class="content-centerTopMainContent"
              v-for="(item, i) in screenList.contentList"
              :key="i"
            >
              <p>{{ item.title }}</p>
              <p>{{ item.amount }}</p>
            </div>
          </el-row>
        </div>
        <div class="content-centerBottomMap"></div>
      </div>
      <div class="content-right">
        <DataCard :title="'市场状况'" style="height: 1930px">
          <template #left>
            <RigthMain style="width: 920px; height: 830px" />
          </template>
        </DataCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
import axios from 'axios'
import moment from 'moment'
import screenfull from 'screenfull'
import { reactive, watch, onUpdated, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import back from './assets/back.png'
import DataCard from './components/dataCard.vue'
import HistogramCharts from './components/histogram.vue'
import DataTable from './components/dataTable.vue'
import RigthMain from './components/rightMain.vue'

const screenList = reactive({
  figureList: [
    { id: 1, figure: 1 },
    { id: 2, figure: 4 },
    { id: 3, figure: 9 },
    { id: 4, figure: 5 },
    { id: 5, figure: 6 },
  ],
  contentList: [
    { id: 1, title: 'HIS签约数', amount: '10' },
    { id: 2, title: '项目建设', amount: '2033' },
    { id: 3, title: '服务交易额', amount: '300' },
    { id: 4, title: '区域服务率', amount: '10%' },
  ],
})

const isFullscreen = () => {
  return screenfull?.toggle()
}

onMounted(() => {
  isFullscreen()
})

watch(
  document,
  (v) => {
    console.log(v, 111111111)
  },
  {
    immediate: true,
    deep: true,
  }
)
</script>

<style lang="less" scoped>
.layout {
  .layout();
}
/deep/ .el-row {
  margin: 0 !important;
}
.page-screen {
  width: 3840px;
  height: 2160px;
  background: #0b1f5a;
  background-size: 100% 100%;
  background-attachment: fixed;
  // overflow: scroll;
  display: flex;
  flex-direction: column;
}
.head /deep/ .el-col {
  padding: 0 !important;
}
.head {
  width: 3840px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-left {
    width: 34%;
    color: #426bc3;
    font-size: 32px;
    margin-left: 50px;
  }
  &-leftTitle {
    width: 920px;
  }
  &-title {
    width: 32%;
    color: #426bc3;
    font-size: 44px;
    text-align: center;
  }
  &-right {
    width: 34%;
    color: #426bc3;
    font-size: 32px;
    display: flex;
    justify-content: end;
    margin-right: 50px;
  }
  &-rightTitle {
    width: 920px;
    display: flex;
    align-items: center;
    justify-content: end;
    span {
      width: 6px;
      height: 80px;
      background: #83dbff;
      margin: 0 20px;
    }
  }
}

.content {
  width: 3840px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  &-left {
    width: 920px;
    margin: 40px;
    overflow: hidden;
  }
  &-center {
    width: 1840px;
    color: #067dd1;
    font-size: 36px;
    margin: 40px 0;
  }
  &-centerTop {
  }
  &-centerTopTitle {
    text-align: center;
  }
  &-centerTopfigure {
    display: flex;
    justify-content: center;
  }
  &-centerTopfigureBack {
    width: 110px !important;
    height: 150px;
    background: linear-gradient(
      to bottom,
      #5c8bfd 0%,
      #5c8bfd 50%,
      #1d54d2 51%,
      #1d54d2 100%
    );
    margin: 40px 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #59e0fd;
    font-size: 80px;
    font-weight: bold;
  }
  &-centerTopMain {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-centerTopMainContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 60px;
    width: 200px;
    height: 200px;
  }
  &-centerBottomMap {
    // background: #59e0fd;
    height: 1330px;
    background: url('./assets//1.svg') no-repeat center;
    background-size: 100% 100%;
  }

  &-right {
    width: 920px;
    margin: 40px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
}
</style>