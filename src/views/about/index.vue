<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-09-02 16:52:03
 * @LastEditors: sj
 * @LastEditTime: 2022-09-02 16:52:03
-->
<template>
  <div class="page-about">
    <div class="ff">
      <div class="layout">
        <Title :title="'公司介绍'" />
        <el-row :gutter="30" justify="space-evenly" class="about">
          <el-col :span="11">
            <div class="about-img">
              <img :src="productList?.img" />
            </div>
          </el-col>
          <el-col :span="13">
            <div class="about-main">
              <p>{{ productList?.main }}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="f5">
      <div class="layout">
        <el-row :gutter="70" justify="space-evenly">
          <el-col :span="8" v-for="item in productList.list" :key="item.id">
            <div class="productItem">
              <div class="img">
                <!-- <img :src="item.icon" alt="" /> -->
              </div>
              <div class="title">{{ item.title }}</div>
              <div class="subTitle">{{ item.subTitle }}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Title from '@/components/app-title.vue'
import mainImg from '@assets/images/about/gongsi.jpg'

import { reactive } from 'vue'

const productList = reactive({
  main: '杭州麟康医疗科技有限公司杭州麟康医疗科技有限公司成立于2014年，是一家专业从事创新医疗服务的科技型企业。公司结合基层民营医疗机构经营难点，依托大数据、互联网、人工智能等核心技术及多渠道医疗资源的整合，为民营医疗机构提供云HIS一体化解决方案，助力提升基层诊所经营效益、诊疗能力及服务水平。同时打造以监管预警为核心的智慧监管系统，旨在为各级卫生监管部门提供科学、全面、完善的数字化智慧监管服务。基于多元化业务场景需求，公司构建专业的医疗软件技术开发、运营、服务团队，自主研发各类核心信息化软件产品，拥有十余项软件著作权，通过了ISO9001质量体系认证，标志着公司产品各项质量指标已达到国家规定标准。截止目前，公司已完成以浙江区域为核心的战略性布局，业务范围覆盖全国，累计为全国近万家基层医疗机构提供服务。',
  img: mainImg,
  list: [
    {
      id: 1,
      title: ' 企业愿景',
      subTitle: ' 让优质的医疗服务触手可及。',
      // icon: '../../assets/images/about/icon/1yuanjing.jpg',
    },
    {
      id: 2,
      title: ' 企业理念',
      subTitle: ' 坚持做好民营医疗机构服务品牌。',
      // icon: '../../assets/images/about/icon/2shiming.jpg',
    },
    {
      id: 3,
      title: ' 企业价值观',
      subTitle: ' 创新、诚信、笃行。',
      // icon: '../../assets/images/about/icon/3jiazhi.jpg',
    },
  ],
})
</script>

<style lang="less" scoped>
.f5 {
  background-color: @backColor;
}
.ff {
  background-color: #fff;
}
.layout {
  .layout();
}
/deep/ .el-row {
  margin: 0 !important;
}
.about /deep/ .el-col {
  padding: 0 !important;
  background: #4eabe1;
}
.about {
  height: 370px;
  position: relative;
  &-img {
    width: 555px;
    height: 100%;
    position: absolute;
    top: -15px;
    left: 15px;
  }
  &-main {
    p {
      margin: 30px 15px 30px 20px;
      color: #fff;
      line-height: 38px;
    }
  }
}
.productItem {
  .flexCenter();
  .hoverShadow();
  flex-direction: column;
  padding-top: 25px;
  font-size: 14px;
  .img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    background-color: @themeColor;
    .flexCenter();
    img {
      width: 40px;
      height: 40px;
    }
  }
  .title {
    font-size: 18px;
    color: @fontColor;
    margin: 10px 0;
  }
  .subTitle {
    color: #888;
    margin-bottom: 10px;
    padding: 0 0 50px 0;
  }
}

.icon {
  width: 35px;
  height: 35px;
  color: #fff;
}
</style>