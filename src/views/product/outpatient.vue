<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-09-02 16:54:05
 * @LastEditors: sj
 * @LastEditTime: 2022-09-16 13:51:15
-->
<template>
  <div class="page-outpatient">
    <div class="ff">
      <div class="layout">
        <Title :title="'智慧门诊SaaS'" />
        <div
          v-for="(item, i) in outpatientList?.outpatientTopList"
          :key="i"
          class="outpatientTitle"
        >
          <div class="outpatientTitle-title">
            <p>{{ item?.title }}</p>
          </div>
          <div class="outpatientTitle-img">
            <img :src="item.img" />
          </div>
        </div>
      </div>
    </div>
    <div class="f5">
      <div class="layout">
        <SubTitle :title="'核心优势'" :pic="coreAdvantageOne" />
        <AddValuesLineList :list="outpatientList?.lineList" />
      </div>
    </div>
    <div class="ff">
      <div class="layoutServer">
        <SubTitle :title="'功能应用'" :pic="adhibitionOne" />
        <AdhibitionList :list="outpatientList?.outpatientBottomList" />
      </div>
    </div>
    <div class="f5 f5Container">
      <div class="layoutServer pricePlanContainer">
        <div class="pricePlan">
          <SubTitle :title="'价格方案'" :pic="pricingSchemeOne" />
          <PricePlan :list="outpatientList?.pricePlanList" />
        </div>
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="rowStyle"
        >
          <el-table-column prop="name" label="功能项目" />
          <el-table-column prop="a" label="专业版" width="200" align="center">
            <template #default="scope">
              <span
                v-if="scope.row.type == 2"
                class="dot"
                :style="{
                  backgroundColor: scope.row.a == 1 ? '#32abe0' : '#FFF',
                }"
              ></span>
              <span v-else></span>
            </template>
          </el-table-column>
          <el-table-column prop="b" label="旗舰版" width="200" align="center">
            <template #default="scope">
              <span
                v-if="scope.row.type == 2"
                class="dot"
                :style="{
                  backgroundColor: scope.row.b == 1 ? '#32abe0' : '#FFF',
                }"
              ></span>
              <span v-else></span>
            </template>
          </el-table-column>
          <el-table-column prop="c" label="大客户版" width="200" align="center">
            <template #default="scope">
              <span
                v-if="scope.row.type == 2"
                class="dot"
                :style="{
                  backgroundColor: scope.row.c == 1 ? '#32abe0' : '#FFF',
                }"
              ></span>
              <span v-else></span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import Title from '@/components/app-title.vue'
import SubTitle from '@/components/app-subTitle.vue'
import AddValuesLineList from '@/components/app-lineList.vue'
import AdhibitionList from '@/components/app-adhibition.vue'
import PricePlan from './components/pricePlan.vue'
import outpatientTitleOne from '@/static/images/product/pic/outpatientPic01.png'
import coreAdvantageOne from '@/static/images/product/icon/addValues/addValuesTitleIcon01.png'
import adhibitionOne from '@/static/images/product/icon/addValues/adhibitionIcon01.png'
import pricingSchemeOne from '@/static/images/product/icon/outpatient/pricingSchemeIcon01.png'
import outpatientBottom01 from '@/static/images/product/icon/outpatient/outpatientBottom01.png'
import outpatientBottom02 from '@/static/images/product/icon/outpatient/outpatientBottom02.png'
import outpatientBottom03 from '@/static/images/product/icon/outpatient/outpatientBottom03.png'
import outpatientBottom04 from '@/static/images/product/icon/outpatient/outpatientBottom04.png'
import outpatientBottom05 from '@/static/images/product/icon/outpatient/outpatientBottom05.png'
import outpatientBottom06 from '@/static/images/product/icon/outpatient/outpatientBottom06.png'
const outpatientList = reactive({
  outpatientTopList: [
    {
      id: 1,
      title:
        ' 基于民营医疗机构医疗全业务流程，打造高性价比的门诊SaaS解决方案，提供预约挂号、电子病历、药房管理、在线支付、经营统计、会员管理等全部诊所业务服务，可满足中医、西医、全科、口腔、医美、门诊等各层级机构的个性化需求，致力提高患者就诊体验及诊所运营效率。',
      img: outpatientTitleOne,
    },
  ],
  lineList: [
    {
      id: '1',
      title:
        '易部署，无需安装插件，通过浏览器访问，方便快捷，当天部署，当天使用。',
    },
    {
      id: '2',
      title: '人性化交互设计，界面直观、简洁，操作方便快捷。',
    },
    {
      id: '3',
      title: '多元化功能支持，可满足各级医疗机构个性化需求。',
    },
    {
      id: '4',
      title: '通医保，确保与医保系统流程对接，为诊所医保结算保驾护航。',
    },
    { id: '5', title: '优秀运维支撑，保证系统安全稳定运行。' },
    {
      id: '6',
      title:
        '7*12小时提供线上线下服务，能高效响应客户需求，并定期提供系统迭代升级服务。',
    },
    {
      id: '7',
      title:
        '搭载智能AI辅助诊疗等多项实用性功能，进一步提升机构的诊疗能力和服务。',
    },
  ],
  outpatientBottomList: [
    {
      id: '1',
      title: '医生工作站',
      subTitle: '集病历书写、浏览、打印、管理为一体，实现病历无纸化书写。',
      img: outpatientBottom01,
    },
    {
      id: '2',
      title: '库房工作站',
      subTitle: '集入库、出库、采购、调价于一体，让药品管理更便捷、高效',
      img: outpatientBottom02,
    },
    {
      id: '3',
      title: '统计报表',
      subTitle: '对医生销售，药品成本，人均成本等进行统计，方便营收核算。',
      img: outpatientBottom03,
    },
    {
      id: '4',
      title: '套餐设置',
      subTitle: '根据日常工作需求可自由组合药品、诊疗套餐，让诊疗流程更便捷。',
      img: outpatientBottom04,
    },
    {
      id: '5',
      title: '会员管理',
      subTitle: '帮助建立合理会员体系，实现差异化服务策略，提高患者黏度。',
      img: outpatientBottom05,
    },
    {
      id: '6',
      title: '更多功能',
      subTitle: '欢迎联系我们咨询',
      img: outpatientBottom06,
    },
  ],
  pricePlanList: [
    {
      id: 1,
      name: '专 业 版',
      target: '个体小型诊所',
      price: '4988 / 年',
    },
    {
      id: 2,
      name: '旗 舰 版',
      target: '大中型诊所/门诊部',
      price: '8988 / 年',
    },
    {
      id: 3,
      name: '大 客 户 版',
      target: '连锁集团/需求定制',
      price: '按需评估',
    },
  ],
})
const tableData = [
  {
    name: '诊所流程',
    type: 1,
    a: 1,
    b: 1,
    c: 1,
  },
  {
    name: '门诊接诊',
    type: 2,
    a: 1,
    b: 1,
    c: 0,
  },
  {
    name: '电子病历',
    type: 2,
    a: 1,
    b: 1,
    c: 1,
  },
  {
    name: '诊所经营',
    type: 1,
    a: 1,
    b: 1,
    c: 1,
  },
  {
    name: '医疗服务',
    type: 2,
    a: 1,
    b: 0,
    c: 1,
  },
  {
    name: '套餐管理',
    type: 2,
    a: 1,
    b: 1,
    c: 1,
  },
  {
    name: '处置管理',
    type: 2,
    a: 0,
    b: 1,
    c: 0,
  },
]

const rowStyle = ({ row, rowIndex }) => {
  console.log(row.type)
  return row.type == 1 ? 'title' : ''
}
</script>

<style lang="less" scoped>
.ff {
  height: 100%;
  background-color: #fff;
}
.f5 {
  background-color: @backColor;
}
.layout {
  .layouts();
}
.layoutServer {
  .layoutServer();
}
/deep/ .el-row {
  margin: 0 !important;
  padding: 0 40px;
}

.outpatientTitle {
  &-title {
    p {
      margin: 0 0 10px;
      padding: 40px 0 0 0px;
      color: #777777;
      font-size: 15px;
      line-height: 30px;
      text-align: left;
    }
  }
  &-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0 0 0;
    img {
      width: 800px;
    }
  }
}
.f5Container {
  min-height: 500px;
  margin-top: 150px;
}
.pricePlanContainer {
  position: relative;
  padding-top: 180px;
  /deep/ .el-table__row,
  /deep/ thead .el-table__cell {
    background-color: @backColor;
  }
  /deep/.title {
    background-color: #d6eefe;
    color: @themeColor;
    &:hover {
      background-color: #d6eefe;
    }
  }
}
.pricePlan {
  width: 100%;
  position: absolute;
  left: 50%;
  top: -180px;
  transform: translateX(-50%);
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid @themeColor;
  display: inline-block;
}
</style>