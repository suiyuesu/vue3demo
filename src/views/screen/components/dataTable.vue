<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-08-26 16:16:57
 * @LastEditors: linxi
 * @LastEditTime: 2022-09-16 14:44:41
-->
<template>
  <table class="table">
    <div>
      <div class="table-tr">
        <p class="table-th">签约机构名称</p>
        <p class="table-th">所属区域</p>
        <p class="table-th">签约时间</p>
      </div>
    </div>
    <div class="scroll">
      <div class="scrollMain">
        <div
          id="tableTr"
          class="table-tr"
          v-for="item in showDataOptionList?.list"
          :key="item.id"
        >
          <p class="table-td">{{ item?.name }}</p>
          <p class="table-td">{{ item?.area }}</p>
          <p class="table-td">{{ item?.time }}</p>
        </div>
        <div
          id="tableTr"
          class="table-tr"
          v-for="item in showDataOptionList?.list"
          :key="item.id"
        >
          <p class="table-td">{{ item?.name }}</p>
          <p class="table-td">{{ item?.area }}</p>
          <p class="table-td">{{ item?.time }}</p>
        </div>
      </div>
    </div>
  </table>
</template>

<script setup>
import { reactive, watch, ref, onMounted } from 'vue'

defineProps({
  data: [],
})
const showDataOptionList = reactive({
  list: [
    {
      id: 1,
      name: 100,
      area: '浙江',
      time: '2022.12.12',
    },
    {
      id: 2,
      name: 100,
      area: '浙江2',
      time: '2022.12.12',
    },
    {
      id: 3,
      name: 101,
      area: '浙江3',
      time: '2022.10.12',
    },
    {
      id: 4,
      name: 101,
      area: '浙江4',
      time: '2022.10.12',
    },
    {
      id: 5,
      name: 101,
      area: '浙江5',
      time: '2022.10.12',
    },
    {
      id: 6,
      name: 101,
      area: '浙江6',
      time: '2022.10.12',
    },
    {
      id: 7,
      name: 101,
      area: '浙江7',
      time: '2022.10.12',
    },
    {
      id: 8,
      name: 101,
      area: '浙江8',
      time: '2022.10.12',
    },
    {
      id: 9,
      name: 101,
      area: '浙江9',
      time: '2022.10.12',
    },
    {
      id: 10,
      name: 101,
      area: '浙江10',
      time: '2022.10.12',
    },
    {
      id: 11,
      name: 101,
      area: '浙江11',
      time: '2022.10.12',
    },
    {
      id: 12,
      name: 101,
      area: '浙江12',
      time: '2022.10.12',
    },
    {
      id: 13,
      name: 101,
      area: '浙江13',
      time: '2022.10.12',
    },
    {
      id: 14,
      name: 101,
      area: '浙江14',
      time: '2022.10.12',
    },
    {
      id: 15,
      name: 101,
      area: '浙江15',
      time: '2022.10.12',
    },
    {
      id: 16,
      name: 101,
      area: '浙江16',
      time: '2022.10.12',
    },
    {
      id: 17,
      name: 101,
      area: '浙江17',
      time: '2022.10.12',
    },
    {
      id: 18,
      name: 101,
      area: '浙江18',
      time: '2022.10.12',
    },
    {
      id: 19,
      name: 101,
      area: '浙江19',
      time: '2022.10.12',
    },
    {
      id: 20,
      name: 101,
      area: '浙江20',
      time: '2022.10.12',
    },
    {
      id: 21,
      name: 101,
      area: '浙江21',
      time: '2022.10.12',
    },
  ],
})
</script>

<style lang="less" scoped>
.table {
  width: 100%;
  padding: 0 40px 40px 40px;
  color: #999999;
  font-size: 32px;
  margin: 20px 0;
  position: relative;
  transform: translate3d(0, 0, 0);

  &-th {
    width: 33%;
    color: #cccccc;
    border-collapse: collapse;
    text-align: center;
  }
  &-tr {
    display: flex;
    justify-content: center;
    border-collapse: collapse;
  }
  &-td {
    width: 33%;
    border-collapse: collapse;
    text-align: center;
  }
  .scrollHead,
  .table-tr,
  .table-th {
    height: 40px;
    line-height: 40px !important;
  }
  .scroll {
    width: 100%;
    height: 760px;
    margin: 20px auto 0;
    overflow: hidden;
  }
  .scrollMain {
    width: 100%;
    height: 780px;
    overflow: hidden;
    font-size: 32px;
  }
  .scrollMain:hover #tableTr {
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
  }
  #tableTr {
    width: 840px;
    height: 40px;
    overflow: hidden;
    font-size: 32px;
    animation: imagesLoop 10s linear 1s infinite normal;
  }
  #tableTr {
    width: 100%;
    height: 40px;
    margin-right: 10px;
    background-size: 100%;
    background-repeat: no-repeat;
    font-size: 32px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
  @keyframes imagesLoop {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-840px);
    }
  }
}
</style>