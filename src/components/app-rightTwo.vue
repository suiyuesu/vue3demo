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
  <div id="rightTwo"></div>
</template>

<script setup>
import { onMounted, reactive, watch, ref } from 'vue'
import * as echarts from 'echarts'

defineProps({
  data: [],
})
const xData = ['杭州市', '衢州市', '丽水市', '宁波市']

const List = ['#74bac2']

const rightTwoList = reactive({
  list: [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
  ],
})

onMounted(() => {
  var myChart = echarts.init(document.getElementById('rightTwo'))
  if (
    rightTwoList?.list?.length ||
    rightTwoList?.list?.map((v) => v.number !== 0)
  ) {
    let option = {
      title: {
        text: '年度营业收入占比',
        left: 'center',
        top: '10%',
        textStyle: {
          color: '#fff',
          fontWeight: 400,
          fontSize: 32,
        },
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'horizontal',
        center: 'center',
        bottom: 70,
        textStyle: {
          color: '#999999',
          fontSize: 24,
        },
        itemHeight: 16,
        itemWidth: 30,
        formatter: function (name) {
          var index = 0
          var clientlabels = rightTwoList?.list.map((v) => v.name)
          var clientcounts = rightTwoList?.list.map((v) => v.value)
          clientlabels.forEach(function (value, i) {
            if (value === name) {
              index = i
            }
          })
          if (clientcounts[index]) {
            return name + '  ' + clientcounts[index] || 0
          } else {
            return name + '  ' + 0
          }
        },
        grid: {
          bottom: '10%',
          containLabel: true,
        },
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: rightTwoList?.list,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          label: {
            minMargin: 10,
            normal: {
              position: 'inner',
              show: false,
            },
          },
        },
      ],
    }
    myChart.setOption(option)
  }
})
</script>

<style lang="less" scoped>
#rightTwo {
  // background: rosybrown;
}
</style>
