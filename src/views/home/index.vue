<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-12 09:03:42
 * @LastEditors: sj
 * @LastEditTime: 2022-09-02 18:00:41
-->
<template>
  <div class="page-home">
    <div class="f5">
      <div class="layout">
        <Title :title="'产品体系'" />
        <el-row :gutter="70" justify="space-evenly">
          <el-col :span="8" v-for="item in productList.list" :key="item.id">
            <div class="productItem">
              <div class="img">
                <!-- <FirstAidKit
                style="width: 40px; height: 40px; color: #fff"
                v-if="item.id == 1"
              /> -->
                <FirstAidKit class="icon" v-if="item.id == 1" />
                <OfficeBuilding class="icon" v-else-if="item.id == 2" />
                <img :src="item.icon" alt="" v-else />
              </div>
              <div class="title">{{ item.title }}</div>
              <div class="subTitle">{{ item.subTitle }}</div>
              <div class="content">
                {{ item.content }}
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="ff">
      <div class="layout">
        <el-row>
          <el-col :span="8">
            <div class="power">
              <p class="power-title">推动基层医疗高质量发展</p>
              <section
                class="power-item"
                v-for="item in productList.powerList"
                :key="item.name"
              >
                <div class="power-font">
                  <span>{{ item.value }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="power-bg"></div>
              </section>
            </div>
          </el-col>
          <el-col :span="12" :offset="4">
            <Title :title="'核心实力'" />
            <div class="power-content">
              基于多元化业务场景需求，麟康打造专业的医疗软件技术开发、运营、服务团队，依托互联网技术、多渠道资源整合、人工智能技术等优势，自主研发各类核心产品，有效衔接卫生监督、医保监管与支付、基层医疗机构、医生、患者以及医疗渠道，形成闭合的良性链路，实现各医疗机构生态价值的可持续增长。
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="f5">
      <div class="layout">
        <Title :title="'多元服务体系'" />
        <el-row :gutter="30" justify="space-evenly">
          <el-col
            :span="8"
            v-for="(item, i) in productList.serverList"
            :key="item.title"
          >
            <div class="server">
              <header>
                <span>0{{ i + 1 }}</span
                >{{ item.title }}
              </header>
              <p>
                {{ item.value }}
              </p>
            </div>
          </el-col>
        </el-row>
        <div class="more" @click="link('addValues')">查看更多</div>
      </div>
    </div>
    <div class="ff">
      <div class="layout">
        <Title :title="'案例展示'" />
        <el-row :gutter="30" justify="space-evenly">
          <el-col
            @click="link('example')"
            :span="8"
            v-for="(item, i) in productList.anliList"
            :key="i"
          >
            <div class="anli">
              <img :src="item" alt="" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="E2">
      <div class="layout">
        <Title :title="'新闻资讯'" />
        <el-row>
          <el-col :span="10" align="middle">
            <img :src="newsImg" alt="" />
          </el-col>
          <el-col :span="13" class="newDetail">
            <div class="newsItem">
              <p class="news-title">数字化赋能基层医疗，助推新时代乡村复兴</p>
              <p>
                麟康医疗受邀出席“中医药助力山区26县高质量发展论坛——数字化应用专场”活动，与各院校专家学者、企业代表一起，“共话”数智医疗，“共谋”山区发展。
              </p>
            </div>
            <div class="newsItem">
              <p class="news-title">
                麟康医疗与唐古信息就基层中医药创新发展达成战略合作
              </p>
              <p>
                近日，杭州麟康医疗科技有限公司（以下简称“麟康医疗”）和杭州唐古信息科技有限公司（以下简称“唐古信息”）达成战略合作。
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import Title from '@/components/app-title.vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import home3 from '@/static/icon/3jianguan.png'
import anli1 from '@/static/imgs/3anli1k.jpg'
import anli2 from '@/static/imgs/4anli2k.jpg'
import anli3 from '@/static/imgs/5anli3.jpg'
import news from '@/static/imgs/6xinwen.png'
const store = useStore()
const router = useRouter()
const productList = reactive({
  list: [
    {
      id: 1,
      title: '智慧门诊SaaS',
      subTitle: '资源共享，降本增效',
      content:
        ' 基于医疗机构业务需求提供一站式门诊SaaS服务，帮助医疗机构高效运作,实现门诊流程管理智能化。',
    },
    {
      id: 2,
      title: '增值运营服务',
      subTitle: '细耕场景，多元赋能',
      content:
        ' 结合实际经营场景为医疗机构提供个性化增值服务，促进其多元化多发展，实现经营效益稳步增长。',
    },
    {
      id: 3,
      icon: home3,
      title: '数智卫监',
      subTitle: '智能联动，精细管控',
      content:
        '构建以“数智卫监”为基础的中心平台，协助各区域卫生监督部门对中小医疗机构诊疗行为进行智能化管控。',
    },
  ],
  powerList: [
    {
      name: 'A',
      value: '专业化团队成员组合',
    },
    {
      name: 'B',
      value: '全方位技术一体配合',
    },
    {
      name: 'C',
      value: '多渠道医疗资源整合',
    },
    {
      name: 'D',
      value: '多模式商业经营聚合',
    },
  ],
  serverList: [
    {
      title: '中医云药房',
      value: '中药委外代煎服务，优化中医馆经营模式，实现降本增效。',
    },
    {
      title: '电子发票',
      value: '提供标准化接口，完成信息系统与医疗电子票据管理平台的对接。',
    },
    {
      title: '双向转诊',
      value: '实现患者从基层转至上层，后续又回转至基层的双向转诊健康闭环。',
    },
    {
      title: '医保业务',
      value: '实现医保系统与HIS系统的衔接，帮助医疗机构完成相应的医保业务。',
    },
    {
      title: '聚合支付',
      value: '一码多付的支付方式，大幅降低手续支出且使用更方便。',
    },
    {
      title: '处方外配',
      value: '接入处方流转信息共享平台，形成“处方流转”到“药品配送”的服务闭环。',
    },
  ],
  anliList: [anli1, anli2, anli3],
})
const newsImg = ref(news)
const link = (path) => {
  store.commit('user/setActiveTab', path)
  router.push(`/${path}`)
}
</script>
<style scoped lang="less">
.f5 {
  background-color: @backColor;
}
.ff {
  background-color: #fff;
}
.E2 {
  background-color: #e2ecf8;
}
.layout {
  .layout();
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
    margin: 20px 0 10px;
  }
  .subTitle {
    color: #ccc;
    margin-bottom: 10px;
  }
  .content {
    color: #888;
    text-align: center;
    padding: 0 50px 60px;
    line-height: 1.8;
  }
}
.icon {
  width: 35px;
  height: 35px;
  color: #fff;
}
.power {
  .flexCenter();
  flex-direction: column;
  background-color: @helpColor;
  .boxShadow();
  color: @themeColor;
  width: 360px;
  padding: 20px 20px 40px;
  &-title {
    font-size: 20px;
    margin: 20px 0 10px;
  }
  &-item {
    .flexCenter();
    width: 100%;
    font-size: 15px;
    justify-content: end;
    padding: 20px 20px 20px 10px;
    border-bottom: 1px solid #eeeeee;
    position: relative;
    box-sizing: border-box;
    transition: all 0.5s;
    &:hover .power-bg {
      width: 320px;
      height: 70px;
    }
    &:hover {
      padding: 0;
      color: #fff;
    }
  }
  &-font {
    .flexCenter();
    justify-content: space-between;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    padding: 0 44px 0 20px;
    span {
      &:last-child {
        color: #fff;
        font-size: 20px;
      }
    }
  }
  &-bg {
    transition: all 0.5s;
    width: 60px;
    height: 30px;
    background-color: @themeColor;
    border-radius: 15px;
  }
  &-content {
    padding: 20px 20px 0;
    color: #888;
    font-size: 15px;
    line-height: 1.8;
  }
}
.server {
  margin-top: 20px;
  .hoverShadow();
  padding: 20px 20px 20px 50px;
  color: #888;
  header {
    color: @themeColor;
    font-size: 18px;
    margin-bottom: 10px;
    span {
      font-family: georgia;
      margin-right: 10px;
    }
  }
}
.more {
  .flexCenter();

  color: @themeColor;
  margin-top: 30px;
}
.anli {
  overflow: hidden;
  cursor: pointer;
  img {
    .hoverScale();
  }
}

.newDetail {
  .flexCenter();
  flex-direction: column;
  justify-content: space-evenly;
}

.newsItem {
  width: 555px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  color: #888;
  .news-title {
    font-size: 18px;
    margin-bottom: 10px;
    color: #666;
    &:hover {
      color: @themeColor;
    }
  }
}
</style>