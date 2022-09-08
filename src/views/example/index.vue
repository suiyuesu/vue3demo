<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-09-02 15:42:37
 * @LastEditors: sj
 * @LastEditTime: 2022-09-02 15:42:38
-->
<template>
  <div class="page-example">
    <div class="ff">
      <div class="layout">
        <Title :title="'业务覆盖'" />
        <div
          v-for="(item, i) in exampleList?.titleList"
          :key="i"
          class="exampleTitle"
        >
          <div class="exampleTitle-title">
            <p>{{ item?.title }}</p>
          </div>
          <div class="exampleTitle-img">
            <img :src="item.img" />
          </div>
        </div>
      </div>
    </div>
    <div class="ff">
      <div class="layout">
        <Title :title="'品质服务'" />
        <el-row :gutter="70" justify="space-evenly">
          <el-col
            :span="8"
            v-for="item in exampleList.serverList"
            :key="item.id"
            class="exampleServer"
          >
            <div class="exampleItem">
              <div class="title">
                <img :src="item.icon" alt="" />
                <p>{{ item.title }}</p>
              </div>
              <div class="subTitle">{{ item.subTitle }}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="ff">
      <div class="layout">
        <Title :title="'案例展示'" />
        <el-row :gutter="70" justify="space-evenly">
          <el-col
            :span="8"
            v-for="item in exampleList.showList.imgList"
            :key="item.id"
            class="exampleShow"
          >
            <div class="exampleShow-img">
              <img :src="item.img" alt="" />
            </div>
          </el-col>
          <el-col class="exampleShow">
            <div class="exampleShow-content">
              <header>{{ exampleList.showList.title }}</header>
              <header>{{ exampleList.showList.subTitle }}</header>
              <p
                v-for="item in exampleList.showList.contentlist"
                :key="item.id"
              >
                {{ item?.content }}
              </p>
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
import { reactive } from 'vue'
import exampleTitleOne from '@/static/images/example/example01.png'
import exampleServerOne from '@/static/images/example/exampleIcon01.png'
import exampleServerTwo from '@/static/images/example/exampleIcon02.png'
import exampleServerThree from '@/static/images/example/exampleIcon03.png'
import exampleShowOne from '@/static/images/example/exampleShow01.jpg'
import exampleShowTwo from '@/static/images/example/exampleShow02.jpg'
import exampleShowThree from '@/static/images/example/exampleShow03.jpg'
const exampleList = reactive({
  titleList: [
    {
      id: 1,
      title:
        ' 基于专业技术服务，麟康以浙江区域为核心，完成战略性布局，业务范围覆盖全国',
      img: exampleTitleOne,
    },
  ],
  serverList: [
    {
      id: 1,
      title: ' 高效部署',
      subTitle:
        ' 云端部署，无需安装插件，通过浏览器访问，方便快捷，无需购买其他硬件，当天部署，当天使用。',
      icon: exampleServerOne,
    },
    {
      id: 2,
      title: ' 极速响应',
      subTitle:
        ' 专业的实施、客服团队7*12小时提供线上线下服务，能快速高效响应客户需求。',
      icon: exampleServerTwo,
    },
    {
      id: 3,
      title: ' 持续迭代',
      subTitle:
        ' 有优秀运维支撑，提供长期稳定的系统运行支持及系统迭代升级服务，保障系统安全稳定运行。',
      icon: exampleServerThree,
    },
  ],
  showList: {
    imgList: [
      { img: exampleShowOne },
      { img: exampleShowTwo },
      { img: exampleShowThree },
    ],
    title: '基层医疗机构赋能',
    subTitle: '诊所营收增长25%',
    contentlist: [
      {
        id: '1',
        content:
          '信息技术的不断进步及在医疗领域的广泛应用，正在加速推进医疗机构信息化建设的步伐，但作为医疗卫生服务体系的主力，基层医疗机构的信息化建设仍处于起步阶段，系统难扩展、功能难增强、投入成本大、后续维护升级困难、数据难保存等特性，导致传统HIS系统难负基层医疗服务机制之重担。通过接入麟康智慧门诊云HIS，可有效解决民营医疗结构信息化建设难题，帮助医疗机构高效运作，实现门诊流程管理智能化。',
      },
      {
        id: '2',
        content:
          '麟康云HIS系统以民营医疗机构经营需求为核心，结合机构个性化需求，打造集在线预约、医生门诊、医保结算、配药发药、经营分析等功能为一体的“轻资产”医疗信息化建设路线，同时可拓展中医云药房、电子发票、转诊会诊等多元增值运营服务，帮助医疗机构大幅提升运营效率及患者就医体验，实现经营稳步增长。',
      },
      {
        id: '3',
        content:
          '为解决机构信息化建设成本投入及技术难题，麟康HIS系统采用云端部署，并且有优秀运维及技术支撑，提供长期稳定的系统运行支持及定期升级服务。机构无需购买昂贵的硬件设备，无需安装插件，投入成本低。既解决诊所缺人员、缺经费、缺技术的难题，也实现诊所数据可存储、系统免维护的信息化场景。',
      },
      {
        id: '4',
        content:
          '如：2019年4月，位于浙江省湖州市的某门诊部（民营）切换用麟康智慧门诊云HIS，覆盖门诊部西医、妇科、口腔科等科室，2019年机构年营收约800多万，2020年初增设中医科后，全年营收超过1000万，中医科带来了200多万的营业收入，净利润80多万。并且通过系统中医云药房服务解决了中药饮片采购、仓储、煎煮、包装等繁琐的工作。',
      },
    ],
  },
})
</script>

<style lang="less" scoped>
.ff {
  height: 100%;
  background-color: #fff;
}
.layout {
  .layout();
}
/deep/ .el-row {
  margin: 0 !important;
}
.exampleServer /deep/ .el-col {
  padding: 0 !important;
}
.exampleShow /deep/ .el-col {
  padding: 0 !important;
}

.exampleTitle {
  &-title {
    p {
      margin-bottom: 10px;
      color: #777777;
      font-size: 16px;
      line-height: 30px;
      text-align: center;
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
.exampleServer {
  padding-top: 20px;
  .exampleItem {
    .hoverShadow();
    flex-direction: column;
    padding-top: 25px;
    font-size: 14px;
    .title {
      display: flex;
      align-items: left;
      justify-content: left;
      color: #32abe0;
      font-size: 18px;
      padding: 0px 50px;
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
    .subTitle {
      color: #888;
      margin-bottom: 10px;
      padding: 5px 20px 20px 50px;
      line-height: 24px;
    }
  }
}
.exampleShow {
  .flexCenter();
  &-img {
    padding-top: 30px;
  }
  &-content {
    background-color: @backColor;
    padding: 10px;
    margin-top: 10px;
    border-radius: 12px;
    color: #888888;
    header {
      font-size: 18px;

      margin: 5px 0;
    }
    p {
      margin-bottom: 10px;
      line-height: 22px;
    }
  }
}
</style>