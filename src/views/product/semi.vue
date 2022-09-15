<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-09-02 16:54:05
 * @LastEditors: sj
 * @LastEditTime: 2022-09-02 16:54:05
-->
<template>
  <div class="page-severalZhiWeiPrison">
    <div class="ff">
      <div class="layout">
        <Title :title="'数智卫监'" />
        <div
          v-for="(
            item, i
          ) in severalZhiWeiPrisonList?.severalZhiWeiPrisonTopList"
          :key="i"
          class="severalZhiWeiPrisonTitle"
        >
          <div class="severalZhiWeiPrisonTitle-title">
            <p>{{ item?.title }}</p>
          </div>
          <div class="severalZhiWeiPrisonTitle-img">
            <img :src="item.img" />
          </div>
        </div>
      </div>
    </div>
    <div class="f5">
      <div class="layout">
        <SubTitle :title="'核心优势'" :pic="coreAdvantageOne" />
        <AddValuesLineList :list="severalZhiWeiPrisonList?.lineList" />
      </div>
    </div>
    <div class="ff">
      <div class="layoutServer">
        <SubTitle :title="'功能应用'" :pic="adhibitionOne" />
        <AdhibitionList
          :list="severalZhiWeiPrisonList?.severalZhiWeiPrisonBottomList"
        />
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
import severalZhiWeiPrisonTitleOne from '@/static/images/product/pic/severalZhiWeiPrisonPic01.png'
import coreAdvantageOne from '@/static/images/product/icon/addValues/addValuesTitleIcon01.png'
import adhibitionOne from '@/static/images/product/icon/addValues/adhibitionIcon01.png'
import severalZhiWeiPrisonBottom01 from '@/static/images/product/icon/severalZhiWeiPrison/severalZhiWeiPrisonBottom01.png'
import severalZhiWeiPrisonBottom02 from '@/static/images/product/icon/severalZhiWeiPrison/severalZhiWeiPrisonBottom02.png'
import severalZhiWeiPrisonBottom03 from '@/static/images/product/icon/severalZhiWeiPrison/severalZhiWeiPrisonBottom03.png'
import severalZhiWeiPrisonBottom04 from '@/static/images/product/icon/severalZhiWeiPrison/severalZhiWeiPrisonBottom04.png'
import severalZhiWeiPrisonBottom05 from '@/static/images/product/icon/severalZhiWeiPrison/severalZhiWeiPrisonBottom05.png'
import severalZhiWeiPrisonBottom06 from '@/static/images/product/icon/severalZhiWeiPrison/severalZhiWeiPrisonBottom06.png'
const severalZhiWeiPrisonList = reactive({
  severalZhiWeiPrisonTopList: [
    {
      id: 1,
      title:
        ' 依托大数据、互联网等信息技术，着力打造科学、全面、完善的数字化智慧监管服务模式，协助各级医疗监督部门对中小医疗机构诊疗行为（机构/医师/病例/处方等）是否违法违规进行信息化智能预警、线上核查及精准执法工作，大幅提高了卫生监督工作的效率，推进我国医疗卫监数据规范化、标准化和信息化水平的提升。',
      img: severalZhiWeiPrisonTitleOne,
    },
  ],
  lineList: [
    { id: '1', title: '具有省市县三个层级的建设经验。' },
    {
      id: '2',
      title: '具有多年基层his开发运营经验，更了解监管需求。',
    },
    {
      id: '3',
      title: '监管领域全面，除传统医疗机构监管，还包括医美监管，中医监管等。',
    },
    { id: '4', title: '完善的售后服务配置，为系统的落地运营保驾护航。' },
  ],
  severalZhiWeiPrisonBottomList: [
    {
      id: '1',
      title: '监管大屏',
      subTitle: '实时监控大屏系统，让管理者更直观了解区域卫生监管信息。',
      img: severalZhiWeiPrisonBottom01,
    },
    {
      id: '2',
      title: '预警管理',
      subTitle: '建立有效卫生监管风险预警机制，全面覆盖常见违法执业情形。',
      img: severalZhiWeiPrisonBottom02,
    },
    {
      id: '3',
      title: '数据中心',
      subTitle: '完成数据实时采集，实现对区域内医疗机构的违规信息的归集。',
      img: severalZhiWeiPrisonBottom03,
    },
    {
      id: '4',
      title: '统计报表',
      subTitle: '对监管过程产生的数据进行多维度，系统化的分析。',
      img: severalZhiWeiPrisonBottom04,
    },
    {
      id: '5',
      title: '预检分诊',
      subTitle: '实现数据对接，严格落实预检分诊监管，守好基层防控第一道屏障。',
      img: severalZhiWeiPrisonBottom05,
    },
    {
      id: '6',
      title: '更多功能',
      subTitle: '欢迎联系我们咨询',
      img: severalZhiWeiPrisonBottom06,
    },
  ],
})
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

.severalZhiWeiPrisonTitle {
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
</style>