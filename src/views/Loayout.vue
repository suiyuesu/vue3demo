<!--
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-05-28 15:11:07
 * @LastEditors: sj
 * @LastEditTime: 2022-06-11 09:27:11
-->
<template>
  <div class="Container" />
</template>

<script >
import { useStore } from 'vuex'
export default {
  name: 'VHome',
  components: {},
  props: {},
  setup() {
    const store = useStore()
    return {
      store
    }
  }
}
</script>

<style lang="less" scoped>

</style>
