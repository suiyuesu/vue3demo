<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-09-02 16:51:12
 * @LastEditors: linxi
 * @LastEditTime: 2022-09-05 10:20:43
-->
<template>
  <div class="page-news">
    <div class="ff" v-if="newsDetailId">
      <div class="layout">
        <DetailTitle
          :title="newsDetailItem?.title"
          :time="newsDetailItem?.time"
          :newsDetailId="newsDetailItem?.id"
        />
        <div
          v-for="(item, index) in newsOneDetail"
          :key="index"
          class="newsDetail"
        >
          <div class="newsDetail-section">
            <p class="newsDetail-sectionTitleOne">{{ item?.subContentOne }}</p>
            <p class="newsDetail-sectionTitleTwo">{{ item?.subContentTwo }}</p>
            <p v-for="(v, i) in item.content" :key="i">{{ v?.name }}</p>
          </div>
          <div class="newsDetail-img" v-for="(c, ci) in item.imgList" :key="ci">
            <img :src="c.img" />
          </div>
        </div>
      </div>
    </div>
    <div class="ff" v-else>
      <div class="layout">
        <Title :title="'新闻中心'" />
        <el-row
          :gutter="70"
          justify="space-evenly"
          class="news"
          @click="link(item)"
          v-for="(item, i) in newsList.list"
          :key="i"
        >
          <el-col :span="2">
            <div class="news-time">
              <p>{{ moment(item?.time).format(DateTimeFormat) }}</p>
            </div>
          </el-col>
          <el-col :span="22">
            <div class="news-title">
              <header>
                {{ item?.title }}
              </header>
            </div>
            <div class="news-main">
              <p>{{ item?.content }}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { onUpdated, reactive, watch } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import moment from 'moment'
import Title from '@/components/app-title.vue'
import { DateTimeFormat } from '@/api/datatime.js'
import DetailTitle from '@/components/app-detailTitle.vue'
import '@/mock/news.js'
import mockApi from '../../api/mockApi.js'

const store = useStore()
const route = useRoute()
const router = useRouter()
const newsList = reactive({
  list: [
    {
      id: 1,
      time: '2022/8/24',
      title: ' 喜报！麟康医疗智慧门诊云HIS系统获得软件产品认定证书',
      content:
        ' 麟康医疗自主研发的“智慧门诊云HIS系统V1.0”产品，被授予《软件产品证书》',
    },
    {
      id: 2,
      time: '2022/7/12',
      title: '麟康医疗正式成为浙江省软件行业协会“会员单位”',
      content:
        '近日，麟康医疗通过了浙江省软件行业协会的严格审核，成为浙江省软件行业协会会员单位，进一步彰显了麟康医疗在信息化软件行业的领先性。',
    },
    {
      id: 3,
      time: '2022/6/30',
      title: '麟康医疗以专注服务助力浙江省各地医疗机构数字化转型',
      content:
        '麟康医疗以医疗机构实际需求出发，利用专业技术积累，持续为医疗机构赋能，助推基层医疗卫生信息化进入云时代',
    },
    {
      id: 4,
      time: '2022/5/22',
      title: '稳步提升，麟康医疗顺利通过ISO9001质量管理体系认证',
      content:
        '近日，杭州麟康医疗科技有限公司顺利通过了ISO9001质量管理体系认证，标志着麟康医疗不仅在各软件系统整合上已达到国际标准。',
    },
    {
      id: 5,
      time: '2022/4/24',
      title: '数字化赋能基层医疗，助推新时代乡村复兴',
      content:
        '麟康医疗受邀出席“中医药助力山区26县高质量发展论坛——数字化应用专场”活动，与各院校专家学者、企业代表一起，“共话”数智医疗，“共谋”山区发展。',
    },
    {
      id: 6,
      time: '2022/4/20',
      title: '数智赋能 | 麟康医疗与唐古信息就基层中医药创新发展达成战略合作',
      content:
        '近日，杭州麟康医疗科技有限公司（以下简称“麟康医疗”）和杭州唐古信息科技有限公司（以下简称“唐古信息”）达成战略合作。',
    },
    {
      id: 7,
      time: '2019/12/03',
      title: '麟康医疗携手浩洋科技，着力提升基层卫生服务能力',
      content:
        '“健康有保障，看病不烦神”不仅仅是老百姓心中的简单愿望，也是各地区政府打造“健康中国”的样本，如何提高基层医疗机构的服务能力，是健康中国背景下亟待解决的问题。',
    },
    {
      id: 8,
      time: '2019/11/15',
      title: '互利共赢，麟康医疗与汉鼎宇佑达成战略合作',
      content:
        '着“健康中国”战略的持续推进，各行各业围绕大健康产业开启了新一轮提速增量、跨界融合的发展，为我国医疗卫生体制改革带来全新变革。',
    },
    {
      id: 9,
      time: '2019/10/17',
      title: '麟康医疗携手壹基因 共同打造健康普惠医疗体系',
      content:
        '2019年10月16日，麟康医疗与壹基因正式签署战略合作协议，今后双方将共同推动基因检测业务的普及，构建先进的健康医疗生态体系。',
    },
    {
      id: 10,
      time: '2019/10/16',
      title: '麟康医疗携手邻家好医 共同打造高效诊所云his平台',
      content:
        '2019年10月16日，麟康医疗与凯鸿科技正式签署战略合作协议，今后双方将共同推动诊所云his业务的普及，推动基层医疗机构信息化管理水平。',
    },
    {
      id: 11,
      time: '2016/6/14',
      title: '各地纷纷叫停门诊输液',
      content:
        '合理的输液可以挽救患者生命，而一次差错也可能让一个生命消逝，输液安全问题一直深受关注。近段时间以来，全国各地纷纷叫停门诊输液。',
    },
    {
      id: 12,
      time: '2016/6/3',
      title: '医生集团能为中国医疗带来什么？',
      content:
        '医生集团、多点执业的概念不在多点，而是在价值的回归和体现。价值回归表现：病人找到合适的医生，避免盲目看病的损失；医生找到合适的病人，获得应有的报酬；医保资金得到合理使用，而不至于鼓励过度医疗……',
    },
    {
      id: 13,
      time: '2015/5/10',
      title: '“金刀”倪一鸣，为你讲解你心脏的一些奥秘',
      content:
        '小编一大早到达现场后，就被会场里的人群差点给挤了出去。低头一看表，才8点35分，离9点讲座开始还早着呢，怎么那多人？',
    },
    {
      id: 14,
      time: '2014/12/24',
      title: '12月27日浙医儿院滨江院区正式启用！',
      content:
        '2014年12月27日，必将成为一个历史节点，位于滨江区的浙医儿院滨江院区将正式启用。浙医儿院滨江院区总用地面积91.5亩，投资约7.44亿元人民币，一期建筑面积约13.05万平方米，床位数900张，停车位近800个。经过五年的精心建设，这家规模将达到国内领先的儿童医院正式启用，为发展国内儿科事业、保障儿童健康发挥更大作用。',
    },
    {
      id: 15,
      time: '2014/12/22',
      title: '杭州麟康医疗科技有限公司成立！',
      content:
        '	2014年12月7日，杭州麟康健康管理有限公司正式开业啦！当天下午3时许，大幕徐徐拉开，开业典礼正式开始。台下高朋满座，众多的业界翘楚与我们共同见证了这激动人心的时刻。',
    },
  ],
})

const newsDetailId = ref(null)
const newsDetailItem = ref(null)
const newsOneDetail = ref(null)

const link = (item) => {
  router.push({
    path: '/news',
    query: {
      id: item.id,
    },
  })
  sessionStorage.setItem('newsDetailItem', JSON.stringify(item))
  newsDetailItem.value = item
}

watch(
  route,
  (v) => {
    newsOneDetail.value = []
    newsDetailId.value = v.query.id
    if (v.query.id) {
      const detailData = sessionStorage.getItem('newsDetailItem')
      newsDetailItem.value = JSON.parse(detailData)
      if (newsDetailId) {
        mockApi
          .getDetail(v.query.id)
          .then((res) => {
            newsOneDetail.value = res?.data
          })
          .catch((res) => {})
      }
    } else {
      sessionStorage.removeItem('newsDetailItem')
    }
  },
  {
    immediate: true,
    deep: true,
  }
)
</script>

<style lang="less" scoped>
.f5 {
  background-color: @backColor;
}
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
.news /deep/ .el-col {
  padding: 0 !important;
}
.news {
  padding: 20px;
  border-bottom: 1px dashed #ccc;
  &-time {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 28px;
  }
  &-title {
    font-size: 20px;
    margin: 5px 0 10px;
    &:hover {
      color: #32abe0;
    }
  }
  &:last-child {
    border-bottom: none;
  }
  &-main {
    p {
      font-size: 15px;
      margin: 0 0 10px;
      color: #888;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.newsDetail {
  &-section {
    text-indent: 28px;
    padding: 30px 0 0;
    p {
      margin-bottom: 10px;
      color: #777777;
      font-size: 16px;
      line-height: 30px;
    }
  }
  &-sectionTitleOne {
    text-align: center;
    margin-bottom: 0px !important;
  }
  &-sectionTitleTwo {
    text-align: center;
  }
  &-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    img {
      width: 800px;
    }
  }
}
</style>