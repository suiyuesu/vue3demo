<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-21 20:10:41
 * @LastEditors: sj
 * @LastEditTime: 2022-08-25 14:31:59
-->
<template>
  <footer class="app-footer">
    <img
      :src="imgSrc"
      title="麟康"
    >
    <!-- 联系我们 -->
    <div class="footerContainer">
      <section>
        <el-row
          :gutter="20"
        >
          <el-col :span="10">
            <el-row justify="space-evenly">
              <el-col
                v-for="item in list"
                :key="item.title"
                :span="6"
                class="intorduce"
              >
                <div class="title">
                  {{ item.title }}
                </div>
                <div
                  v-for="el in item.item"
                  :key="el.name"
                >{{ el.name }}</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col
            :span="11"
            class="center"
          >
            <div class="title">合作伙伴</div>
            <div
              id="gd_demo"
              ref="gd_demo"
            >
              <div id="gd_indemo">
                <div
                  id="gd_demo1"
                  ref="gd_demo1"
                >
                  <img
                    v-for="item in imgLink"
                    :key="item.src"
                    :src="item.src"
                    @click="link(item.link)"
                  >
                </div>
                <div
                  id="gd_demo2"
                  ref="gd_demo2"
                />
              </div>
            </div>
          </el-col>
          <el-col
            :span="3"
            class="center"
          >
            <div class="title">麟康医疗</div>
            <img
              src="../static/images/ewm/ewm_lkyl.png"
              style="width: 80px"
            >
          </el-col>
        </el-row>
        <el-row
          justify="center"
          style="margin-top: 20px"
        >
          <a
            style="color: #fff"
            @click="link('https://beian.miit.gov.cn')"
          >浙ICP备19029717号-1</a>&ensp;|&ensp;互联网药品信息服务资格证：(浙)-经营性-2019-0087&ensp;|&ensp;杭州麟康医疗科技有限公司
          © 版权所有
        </el-row>
        <el-row
          justify="center"
          align="middle"
        >
          <el-icon><LocationFilled /></el-icon>&nbsp;
          浙江省杭州市滨江区火炬大道581号&emsp;
          <el-icon><PhoneFilled /></el-icon>&nbsp; 17366656508&emsp;
          <el-icon><Comment /></el-icon>&nbsp; hr@linkang-medical.com
        </el-row>
      </section>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const imgSrc = require('@/static/imgs/footer1.jpg')
const list = [
  {
    title: '产品体系',
    item: [
      { name: '智慧门诊SaaS', link: '/da' },
      { name: '增值运营服务', link: '/da' },
      { name: '数智监控', link: '/da' }
    ]
  },
  {
    title: '服务案例',
    item: [
      { name: '面向医疗机构', link: '/da' },
      { name: '面向区域医疗', link: '/da' },
      { name: '面向政府部门', link: '/da' }
    ]
  },
  {
    title: '关于麟康',
    item: [
      { name: '公司介绍', link: '/da' },
      { name: '联系我们', link: '/da' },
      { name: '加入我们', link: '/da' }
    ]
  }
]
const imgLink = [
  {
    src: require('@/static/images/partner/icon_zdyxy.png'),
    link: 'http://www.cmm.zju.edu.cn/'
  },
  {
    src: require('@/static/images/partner/icon_eb.png'),
    link: 'http://www.zjuch.cn/'
  },
  {
    src: require('@/static/images/partner/icon_lhyh.png'),
    link: 'https://www.urcb.com/'
  },
  {
    src: require('@/static/images/partner/icon_szl.png'),
    link: 'http://www.zchospital.com/'
  },
  {
    src: require('@/static/images/partner/icon_yjy.png'),
    link: 'https://www.1gene.com.cn/index'
  },
  {
    src: require('@/static/images/partner/icon_zjkj.png'),
    link: 'http://www.zhuojianchina.com/'
  },
  {
    src: require('@/static/images/partner/icon_kg.png'),
    link: 'http://www.tangutek.com/'
  },
  {
    src: require('@/static/images/partner/icon_zy.png'),
    link: 'http://www.zy91.com/'
  },
  {
    src: require('@/static/images/partner/icon_ze.png'),
    link: 'http://www.z2hospital.com/'
  }
]
const gd_demo = ref(null)
const gd_demo1 = ref(null)
const gd_demo2 = ref(null)
onMounted(init)
function init() {
  const speed = 10 // 数字越大速度越慢
  const tab = gd_demo.value
  const tab1 = gd_demo1.value
  const tab2 = gd_demo2.value
  tab2.innerHTML = tab1.innerHTML
  let left = 0
  function Marquee() {
    if (tab2.offsetWidth - tab.scrollLeft <= 0) {
      left -= tab1.offsetWidth
    } else {
      left++
    }
    tab.scrollLeft = left
  }
  var MyMar = window.setInterval(Marquee, speed)
  tab.onmouseover = function () {
    clearInterval(MyMar)
  }
  tab.onmouseout = function () {
    MyMar = setInterval(Marquee, speed)
  }
}

function link(href) {
  window.open(href, '_blank')
}
</script>

<style scoped lang="less">
.app-footer {
  overflow: hidden;
  background-color: #f5f5f5;
  padding-top: 20px;
  .footerContainer {
    height: 250px;
    padding: 20px 0;
    background-color: #333e48;
    color: #fff;
    section {
      width: 1240px;
      margin: 0 auto;
    }
  }
  .intorduce {
    // padding-left: 30px;
    div {
      margin-bottom: 10px;
      text-align: left;
    }
  }
  .title {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .center {
    text-align: center;
  }
  #gd_demo {
    overflow: hidden;
    overflow: hidden;
    width: 100%;
  }
  #gd_demo img {
    width: 180px;
    height: 80px;
    margin: 0px 10px;
    border: 3px solid #f2f2f2;
    cursor: pointer;
  }
  #gd_indemo {
    float: left;
    width: 800%;
  }
  #gd_demo1 {
    float: left;
  }
  #gd_demo2 {
    float: left;
  }
}
</style>
