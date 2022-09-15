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
  <div id="main"></div>
</template>

<script setup>
import { onMounted, reactive, watch, ref } from 'vue'
import * as echarts from 'echarts'

defineProps({
  data: [],
})
const xData = ['杭州市', '衢州市', '丽水市', '宁波市']

const List = ['#74bac2']

const histogramOptionList = reactive({
  list: [
    {
      id: 1,
      number: 103,
    },
    {
      id: 2,
      number: 210,
    },
    {
      id: 3,
      number: 290,
    },
    {
      id: 4,
      number: 1000,
    },
  ],
})

onMounted(() => {
  var myChart = echarts.init(document.getElementById('main'))
  if (
    histogramOptionList?.list?.length ||
    histogramOptionList?.list?.map((v) => v.number !== 0)
  ) {
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        show: true,
        formatter: function (name) {
          return '浙江省截止今日服务机构数'
        },
        bottom: 0,
        textStyle: {
          color: '#999999',
          fontSize: 24,
          marginTop: -30,
        },
        itemHeight: 16,
        itemWidth: 30,
      },
      // legend: {
      //   show: false,
      // },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: xData,
        axisLabel: {
          textStyle: {
            fontSize: 24,
            color: '#999999',
          },
        },
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: false, //坐标轴刻度线
        },
        axisLabel: {
          textStyle: {
            fontSize: 24,
            color: '#999999',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#061F72'],
            width: 1,
            type: 'solid',
          },
        },
      },
      series: [
        {
          name: '数值',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: histogramOptionList?.list?.map((v) => {
            return v?.number
          }),

          color: List[1],
        },
      ],
    }
    myChart.setOption(option)
  }
})
</script>

<style lang="less" scoped></style>
