<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-09-02 16:52:03
 * @LastEditors: linxi
 * @LastEditTime: 2022-09-09 13:46:12
-->
<template>
  <div class="page-about">
    <div class="ff">
      <div class="layout">
        <Title :title="'公司介绍'" />
        <el-row :gutter="30" justify="space-evenly" class="introduce about">
          <el-col :span="11">
            <div class="about-img">
              <img :src="aboutList?.img" />
            </div>
          </el-col>
          <el-col :span="13">
            <div class="about-main">
              <p>{{ aboutList?.main }}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="f5">
      <div class="layout">
        <el-row :gutter="70" justify="space-evenly">
          <el-col
            :span="8"
            v-for="item in aboutList.list"
            :key="item.id"
            class="qiye"
          >
            <div class="productItem">
              <div class="img">
                <img :src="item.icon" alt="" />
              </div>
              <div class="title">{{ item.title }}</div>
              <div class="subTitle">{{ item.subTitle }}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="ff">
      <div class="layout">
        <Title :title="'联系我们'" />
        <el-row :gutter="30" justify="space-evenly" class="contact">
          <el-col :span="6">
            <div class="contact-title">
              <header>{{ aboutList.concatList?.title }}</header>
              <div
                v-for="(item, i) in aboutList.concatList.concatListMain"
                :key="i"
                class="contact-content"
              >
                <div class="contact-icon">
                  <i class="iconfont icondidian" />
                </div>
                <div class="contact-main">
                  <p>{{ item?.main }}</p>
                </div>
              </div>
              <div class="contact-botton">
                <p>{{ aboutList.concatList?.concatPhone }}</p>
                <p>{{ aboutList.concatList?.concatHint }}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="contact-map">
              <iframe
                src="./map.html"
                class="contact-iframeMap"
                frameborder="0"
              ></iframe>
              <!-- <div class="contact-loader">
                <img :src="mapIcon" />
              </div> -->
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="f5">
      <div class="layout">
        <Title :title="'加入我们'" />
        <div class="join">
          <div class="join-title">
            <p>与优秀的人，做专业的事！</p>
          </div>
          <div class="join-title">
            <p>
              麟康诚邀各优秀人才、毕业生、在校生加入，与我们一起，探索医疗健康更多可能
            </p>
          </div>
          <div class="join-main">
            <p>发送邮件，投递简历，开启你和麟康的故事</p>
          </div>
          <div class="join-area">
            <p>hr@linkang-medical.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Title from '@/components/app-title.vue'
import mainImg from '@/static/images/about/gongsi.jpg'
import qiyeImgOne from '@/static/images/about/icon/1yuanjing.png'
import qiyeImgTwo from '@/static/images/about/icon/2shiming.png'
import qiyeImgThree from '@/static/images/about/icon/3jiazhi.png'
import mapIcon from '@/static/images/loader.gif'
import { reactive } from 'vue'

const aboutList = reactive({
  main: '杭州麟康医疗科技有限公司杭州麟康医疗科技有限公司成立于2014年，是一家专业从事创新医疗服务的科技型企业。公司结合基层民营医疗机构经营难点，依托大数据、互联网、人工智能等核心技术及多渠道医疗资源的整合，为民营医疗机构提供云HIS一体化解决方案，助力提升基层诊所经营效益、诊疗能力及服务水平。同时打造以监管预警为核心的智慧监管系统，旨在为各级卫生监管部门提供科学、全面、完善的数字化智慧监管服务。基于多元化业务场景需求，公司构建专业的医疗软件技术开发、运营、服务团队，自主研发各类核心信息化软件产品，拥有十余项软件著作权，通过了ISO9001质量体系认证，标志着公司产品各项质量指标已达到国家规定标准。截止目前，公司已完成以浙江区域为核心的战略性布局，业务范围覆盖全国，累计为全国近万家基层医疗机构提供服务。',
  img: mainImg,
  list: [
    {
      id: 1,
      title: ' 企业愿景',
      subTitle: ' 让优质的医疗服务触手可及。',
      icon: qiyeImgOne,
    },
    {
      id: 2,
      title: ' 企业理念',
      subTitle: ' 坚持做好民营医疗机构服务品牌。',
      icon: qiyeImgTwo,
    },
    {
      id: 3,
      title: ' 企业价值观',
      subTitle: ' 创新、诚信、笃行。',
      icon: qiyeImgThree,
    },
  ],
  concatList: {
    title: '预约咨询，您将获得：',
    concatPhone: '现在就拨打咨询电话：17366656508',
    concatHint: '我们将竭诚为您服务',
    concatListMain: [
      { id: 1, main: '1V1客户服务' },
      { id: 2, main: '专业技术咨询' },
      { id: 3, main: '全方位产品解读' },
      { id: 4, main: '成熟定制化解决方案' },
      { id: 5, main: '成功客户案例分享' },
    ],
  },
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
}
.contact /deep/ .el-col {
  padding: 0 !important;
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
.introduce {
  background: #4eabe1;
}
.qiye {
  padding-bottom: 30px;
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
.contact {
  color: #888888;
  &-title {
    height: 25px;
    line-height: 25px;
  }
  &-content {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }
  &-icon {
    width: 25px;
    height: 25px;
  }
  &-icon /deep/ .iconfont {
    color: #4eabe1 !important;
    font-size: 16px !important;
  }
  &-botton {
    margin-top: 15px;
  }
  &-map {
    width: 100%;
    height: 300px !important;
  }
  &-loader {
  }
  &-iframeMap {
    width: 100%;
    height: 100%;
  }
}
.join {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &-title {
    color: #32abe0;
    p {
      text-align: center;
      margin-bottom: 5px;
    }
  }
  &-main {
    color: #888888;
    p {
      text-align: center;
      margin: 20px 0 15px;
    }
  }
  &-area {
    color: #ffffff;
    display: flex;
    justify-content: center;
    p {
      width: 228px;
      height: 30px;
      text-align: center;
      display: inline-block;
      background: #32abe0;
      line-height: 30px;
      border-radius: 20px;
    }
  }
}
</style>