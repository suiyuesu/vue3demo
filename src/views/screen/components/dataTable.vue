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
  <table class="table">
    <thead>
      <tr class="table-tr">
        <th class="table-th">签约机构名称</th>
        <th class="table-th">所属区域</th>
        <th class="table-th">签约时间</th>
      </tr>
    </thead>
    <tbody class="scrollMain">
      <tr
        id="rowup"
        class="table-tr"
        v-for="item in showDataOptionList?.list"
        :key="item.id"
      >
        <td class="table-td">{{ item?.name }}</td>
        <td class="table-td">{{ item?.area }}</td>
        <td class="table-td">{{ item?.time }}</td>
      </tr>
    </tbody>
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
      name: 101,
      area: '陕西',
      time: '2022.10.12',
    },
    {
      id: 3,
      name: 102,
      area: '山西',
      time: '2022.08.12',
    },
    {
      id: 4,
      name: 103,
      area: '福建按',
      time: '2021.10.12',
    },
    {
      id: 5,
      name: 100,
      area: '浙江',
      time: '2022.12.12',
    },
    {
      id: 6,
      name: 101,
      area: '陕西',
      time: '2022.10.12',
    },
    {
      id: 7,
      name: 102,
      area: '山西',
      time: '2022.08.12',
    },
    {
      id: 8,
      name: 103,
      area: '福建按',
      time: '2021.10.12',
    },
    {
      id: 9,
      name: 100,
      area: '浙江',
      time: '2022.12.12',
    },
    {
      id: 10,
      name: 101,
      area: '陕西',
      time: '2022.10.12',
    },
    {
      id: 11,
      name: 102,
      area: '山西',
      time: '2022.08.12',
    },
    {
      id: 1,
      name: 100,
      area: '浙江',
      time: '2022.12.12',
    },
    {
      id: 2,
      name: 101,
      area: '陕西',
      time: '2022.10.12',
    },
    {
      id: 3,
      name: 102,
      area: '山西',
      time: '2022.08.12',
    },
    {
      id: 4,
      name: 103,
      area: '福建按',
      time: '2021.10.12',
    },
    {
      id: 5,
      name: 100,
      area: '浙江',
      time: '2022.12.12',
    },
  ],
})

// const gd_demo = ref(null)
// const gd_demo1 = ref(null)
// const gd_demo2 = ref(null)
// onMounted(init)
// function init() {
//   const speed = 10 // 数字越大速度越慢
//   const tab = gd_demo.value
//   const tab1 = gd_demo1.value
//   const tab2 = gd_demo2.value
//   tab2.innerHTML = tab1.innerHTML
//   let left = 0
//   function Marquee() {
//     if (tab2.offsetWidth - tab.scrollLeft <= 0) {
//       left -= tab1.offsetWidth
//     } else {
//       left++
//     }
//     tab.scrollLeft = left
//   }
//   var MyMar = window.setInterval(Marquee, speed)
//   tab.onmouseover = function () {
//     clearInterval(MyMar)
//   }
//   tab.onmouseout = function () {
//     MyMar = setInterval(Marquee, speed)
//   }
// }
</script>

<style lang="less" scoped>
.table {
  width: 100%;
  height: 810px;
  color: #999999;
  font-size: 32px;
  margin: 20px 0;

  &-th {
    color: #cccccc;
    border-collapse: collapse;
    text-align: center;
    height: 40px;
    line-height: 40px !important;
  }
  &-tr {
    border-collapse: collapse;
    text-align: center;
    height: 40px;
    line-height: 40px !important;
  }
  &-td {
    border-collapse: collapse;
    text-align: center;
    height: 40px;
    line-height: 40px !important;
  }
}
</style>
