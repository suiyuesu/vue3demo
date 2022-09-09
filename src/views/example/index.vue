<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-09-02 15:42:37
 * @LastEditors: linxi
 * @LastEditTime: 2022-09-09 13:42:59
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
        <el-row :gutter="70" justify="space-evenly" class="exampleMain">
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
        <el-row :gutter="70" justify="space-evenly" class="exampleMain">
          <el-col
            :span="8"
            v-for="(item, i) in exampleList.showList.imgList"
            :key="i"
            class="exampleShow"
          >
            <div class="exampleShow-img" @click="getData(item?.id)">
              <img :src="item.img" alt="" />
              <div
                :class="
                  exampleBottomId == item?.id ? 'exampleShow-selectImg' : ''
                "
              ></div>
            </div>
          </el-col>
          <el-col class="exampleShow">
            <div class="exampleShow-content">
              <header>
                {{
                  exampleBottomId == 1
                    ? exampleList.showList?.titleOne
                    : exampleBottomId == 2
                    ? exampleList.showList?.titleTwo
                    : exampleBottomId == 3
                    ? exampleList.showList.titleThree
                    : ''
                }}
              </header>
              <header>
                {{
                  exampleBottomId == 1
                    ? exampleList.showList?.subTitleOne
                    : exampleBottomId == 2
                    ? exampleList.showList?.subTitleTwo
                    : exampleBottomId == 3
                    ? exampleList.showList.subTitleThree
                    : ''
                }}
              </header>
              <p
                v-for="item in exampleList.showList.contentlist"
                :key="item.id"
              >
                {{
                  exampleBottomId == 1
                    ? item?.contentOne
                    : exampleBottomId == 2
                    ? item?.contentTwo
                    : exampleBottomId == 3
                    ? item.contentThree
                    : ''
                }}
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
import { reactive, watch } from 'vue'
import exampleTitleOne from '@/static/images/example/example01.png'
import exampleServerOne from '@/static/images/example/exampleIcon01.png'
import exampleServerTwo from '@/static/images/example/exampleIcon02.png'
import exampleServerThree from '@/static/images/example/exampleIcon03.png'
import exampleShowOne from '@/static/images/example/exampleShow01.jpg'
import exampleShowTwo from '@/static/images/example/exampleShow02.jpg'
import exampleShowThree from '@/static/images/example/exampleShow03.jpg'

const exampleBottomId = ref(1)

const getData = (v) => {
  exampleBottomId.value = v
}

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
      { img: exampleShowOne, id: '1' },
      { img: exampleShowTwo, id: '2' },
      { img: exampleShowThree, id: '3' },
    ],
    titleOne: '基层医疗机构赋能',
    titleTwo: '区域医疗赋能',
    titleThree: '卫监部门赋能',
    subTitleOne: '诊所营收增长25%',
    subTitleTwo: '实现区域数据协同',
    subTitleThree: '打造数字化智能监管',
    contentlist: [
      {
        id: '1',
        contentOne:
          '信息技术的不断进步及在医疗领域的广泛应用，正在加速推进医疗机构信息化建设的步伐，但作为医疗卫生服务体系的主力，基层医疗机构的信息化建设仍处于起步阶段，系统难扩展、功能难增强、投入成本大、后续维护升级困难、数据难保存等特性，导致传统HIS系统难负基层医疗服务机制之重担。通过接入麟康智慧门诊云HIS，可有效解决民营医疗结构信息化建设难题，帮助医疗机构高效运作，实现门诊流程管理智能化。',
        contentTwo:
          '当前，由于我国民营医疗机构数量庞大，且分布地域不同，规模不同，甚至类型不同，如果同一区域内各机构选用不同的信息系统，通常会出现接口未打通、数据采集分散、数据标准不统一等问题，想要利用信息系统顺利向监管平台上报诊疗信息以及保证上报数据的质量，可能存在很大问题。只有在区域内部署有统一标准的的HIS系统，在现有基础上实现服务衍生，才能同时满足政府监管与机构经营需求，推动个体诊疗机构信息化升级，完成经营思路的转变。',
        contentThree:
          '一直以来，建立和规范卫生监督管理模式是基层卫生监督机构需要迫切解决的重要问题，但传统卫监模式一直存在监管行政成本高、监督工作内容庞杂、执法过程手段单一、违法取证难度大、监管能力薄弱、数据协同应用难等突出问题。以麟康HIS系统为基础，构建以“智慧卫监”为基础的中心系统，实现各卫生监督信息系统互联、医疗行为过程实时监管、数据资源协同共享是解决以上问题，完成从传统执法模式向现代化执法模式跨越式转变的重要途径。',
      },
      {
        id: '2',
        contentOne:
          '麟康云HIS系统以民营医疗机构经营需求为核心，结合机构个性化需求，打造集在线预约、医生门诊、医保结算、配药发药、经营分析等功能为一体的“轻资产”医疗信息化建设路线，同时可拓展中医云药房、电子发票、转诊会诊等多元增值运营服务，帮助医疗机构大幅提升运营效率及患者就医体验，实现经营稳步增长。',
        contentTwo:
          '基于区域民营机构数据互联互通需求，麟康构建以云HIS为核心的基层医疗一体化解决方案，以推动区域公共卫生信息化建设为着力点，为区域内各医疗机构提供“轻量级”门诊HIS系统，无需安装任何插件，即可在云端完成系统的集中部署，以此提升民营医疗机构的信息化、规范化水平，实现病历与处方的电子化。有效解决民营医疗机构信息化程度不高的问题，同时也为监管部门监管提供了系统规范化的数据，实现各医疗机构“无机房、无服务器、无系统、免维护”的平台应用。',
        contentThree:
          '借助云计算、大数据和AI等创新型信息技术，麟康以现有信息化平台为基础，搭建覆盖全区域的监管平台，完成对区域内医疗机构的违规信息的归集。一方面将数据向上上报至市级、省级监管平台，为省市级平台提供基础数据。另一方面将预警信息向下提供给具体执法人员，实现远程智能监管，提高工作效率，实现上下级信息的互通。',
      },
      {
        id: '3',
        contentOne:
          '为解决机构信息化建设成本投入及技术难题，麟康HIS系统采用云端部署，并且有优秀运维及技术支撑，提供长期稳定的系统运行支持及定期升级服务。机构无需购买昂贵的硬件设备，无需安装插件，投入成本低。既解决诊所缺人员、缺经费、缺技术的难题，也实现诊所数据可存储、系统免维护的信息化场景。',
        contentTwo:
          '为提高医疗机构经营效率，提升服务能力，满足患者就医需求，在建设云HIS的同时，可结合机构实际经营环节，为机构匹配中医云药房、双向转诊、电子发票、检查检验等多项经营性增值服务内容，并实现平台数据的集中采集及信息的互联互通，促进医疗机构多元化多收益的发展。',
        contentThree:
          '数智卫监系统的构建，不仅大大减少了监管部门的用人需求，降低了现场执法成本及提高了执法效率，同时对区域内医疗机构执业行为进行有力规范，有助于提升机构执业人员的行业素质，提高他们的防控责任意识和医疗服务质量，降低不良行为发生概率。',
      },
      {
        id: '4',
        contentOne:
          '如：2019年4月，位于浙江省湖州市的某门诊部（民营）切换用麟康智慧门诊云HIS，覆盖门诊部西医、妇科、口腔科等科室，2019年机构年营收约800多万，2020年初增设中医科后，全年营收超过1000万，中医科带来了200多万的营业收入，净利润80多万。并且通过系统中医云药房服务解决了中药饮片采购、仓储、煎煮、包装等繁琐的工作。',
        contentTwo:
          '如：衢州市某区对接供应商体系完成在HIS系统服务功能落地，在提升区域范围内医疗机构信息化建设水平的同时，为各机构提供满足核心业务需求的增值服务，通过对接云药房、药械采购平台、聚合支付三大功能，为区域内机构赋能，带来千万级业务创收，逐步推动基层医疗卫生服务升级。',
        contentThree:
          '如：2021年，麟康结合安吉卫生监管需求，打造完善、科学、全面的“数智卫监”监管体系。覆盖全域80%以上的医疗机构，对各卫生监督环节实现全覆盖、全时段、全流程监管，确保无漏洞无死角，有效加强安吉卫生监督执法效率，提升基层医疗机构信息化水平。',
      },
    ],
  },
})

watch(
  exampleBottomId,
  () => {
    console.log(exampleBottomId.value, 'exampleBottomId')
  },
  {
    immediate: true,
    deep: true,
  }
)
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
  padding: 0 40px;
}
.exampleMain /deep/ .el-col {
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
      align-items: center;
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
    position: relative;
    img {
      width: 360px;
    }
  }
  &-selectImg {
    width: 360px;
    height: 252px;
    position: absolute;
    top: 30px;
    background-color: rgba(0, 0, 0, 0.3) !important;
  }
  &-content {
    background-color: @backColor;
    padding: 10px;
    margin: 10px;
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