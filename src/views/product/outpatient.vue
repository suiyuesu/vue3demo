<!--
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-09-02 16:53:43
 * @LastEditors: sj
 * @LastEditTime: 2022-09-05 16:48:58
-->
<template>
  <div class="ff">
    <div class="ff">
      <div class="layout">
        <div class="top">
          <Title :title="'智慧门诊SaaS'" />
          <section>
            基于民营医疗机构医疗全业务流程，打造高性价比的门诊SaaS解决方案，提供预约挂号、电子病历、药房管理、在线支付、经营统计、会员管理等全部诊所业务服务，可满足中医、西医、全科、口腔、医美、门诊等各层级机构的个性化需求，致力提高患者就诊体验及诊所运营效率。
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Title from '@/components/app-title.vue'
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

.top {
  padding: 0 50px;
  section {
    color: #888;
    font-size: 15px;
    line-height: 2;
  }
}
</style>