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
  <div class="page-addValues">
    <div class="ff">
      <div class="layout">
        <Title :title="'增值运营服务'" />
        <div
          v-for="(item, i) in addValuesList?.addValuesTopList"
          :key="i"
          class="addValuesTitle"
        >
          <div class="addValuesTitle-title">
            <p>{{ item?.title }}</p>
          </div>
          <div class="addValuesTitle-img">
            <img :src="item.img" />
          </div>
        </div>
      </div>
    </div>
    <div class="f5">
      <div class="layout">
        <SubTitle :title="'核心优势'" :pic="coreAdvantageOne" />
        <AddValuesLineList :list="addValuesList?.lineList" />
      </div>
    </div>
    <div class="ff">
      <div class="layoutServer">
        <SubTitle :title="'服务应用'" :pic="adhibitionOne" />
        <AdhibitionList :list="addValuesList?.addValuesBottomList" />
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
import addValuesTitleOne from '@/static/images/product/pic/addValuesPic01.png'
import coreAdvantageOne from '@/static/images/product/icon/addValues/addValuesTitleIcon01.png'
import adhibitionOne from '@/static/images/product/icon/addValues/adhibitionIcon01.png'
import addValuesBottom01 from '@/static/images/product/icon/addValues/addValuesBottom01.png'
import addValuesBottom02 from '@/static/images/product/icon/addValues/addValuesBottom02.png'
import addValuesBottom03 from '@/static/images/product/icon/addValues/addValuesBottom03.png'
import addValuesBottom04 from '@/static/images/product/icon/addValues/addValuesBottom04.png'
import addValuesBottom05 from '@/static/images/product/icon/addValues/addValuesBottom05.png'
import addValuesBottom06 from '@/static/images/product/icon/addValues/addValuesBottom06.png'
const addValuesList = reactive({
  addValuesTopList: [
    {
      id: 1,
      title:
        ' 为提高经营效率、促进民营医疗机构多元化多收益的发展，结合实际经营环节，可匹配多项经营性增值服务内容，包括中医云药房、双向转诊、处方外配、聚合支付、基因检测、检查检验、辅助诊疗等，实现诊所经营过程中的全链业务贯通，切实满足各机构运营需求，实现营收稳步增长。',
      img: addValuesTitleOne,
    },
  ],
  lineList: [
    { id: '1', title: '多元服务模式，满足不同医疗机构个性化经营需求。' },
    {
      id: '2',
      title:
        '联动优质第三方渠道建立新型供应链体系，实现成本的优化与效率的提升。',
    },
    {
      id: '3',
      title:
        '规范管理各服务系统信息接口，打通数据壁垒，实现业务协作和资源共享。',
    },
    { id: '4', title: '创新服务模式，实现线上、线下就诊体验有机结合。' },
    {
      id: '5',
      title:
        '让更多服务触手可及，解决基层医疗资源总量不足、基础不强、分布不均衡等问题。',
    },
  ],
  addValuesBottomList: [
    {
      id: '1',
      title: '中医云药房',
      subTitle: '中药委外代煎服务，优化中医馆经营模式，实现降本增效。',
      img: addValuesBottom01,
    },
    {
      id: '2',
      title: '在线预约',
      subTitle: '提供线上预约服务，患者预约更便捷，诊所资源调配轻松有序。',
      img: addValuesBottom02,
    },
    {
      id: '3',
      title: '辅助诊疗',
      subTitle:
        '为诊所处方开具提供精准、可信诊疗知识支持，并结合病症提供建议处方。',
      img: addValuesBottom03,
    },
    {
      id: '4',
      title: '检查检验',
      subTitle: '提供第三方抽血化验等服务支持，辅助医师诊疗并扩大营收。',
      img: addValuesBottom04,
    },
    {
      id: '5',
      title: '赋能服务',
      subTitle: '基于机构经营需求，提供医保代办、数据迁移等服务支持。',
      img: addValuesBottom05,
    },
    {
      id: '6',
      title: '更多功能',
      subTitle: '欢迎联系我们咨询',
      img: addValuesBottom06,
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

.addValuesTitle {
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